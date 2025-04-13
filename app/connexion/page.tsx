'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function ConnexionPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    setMessage(error ? 'Erreur : ' + error.message : 'Lien de connexion envoyé 📩')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Connexion</h1>
      <input
        type="email"
        placeholder="votre email"
        className="border px-4 py-2 mb-4 w-full max-w-sm"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-[#0F1E47] text-white px-6 py-2 rounded hover:bg-[#1a2960]"
      >
        Envoyer le lien magique
      </button>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  )
}
