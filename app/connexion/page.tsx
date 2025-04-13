'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function ConnexionPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard') // redirection après succès
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Connexion Investisseurs</h1>

      <input
        type="email"
        placeholder="Courriel"
        className="border p-2 w-full mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="border p-2 w-full mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-700 text-white px-4 py-2 w-full"
      >
        Connexion
      </button>

      <p className="text-sm mt-4 text-center">
        <a href="/reset" className="text-blue-500 hover:underline">
          Mot de passe oublié ?
        </a>
      </p>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  )
}
