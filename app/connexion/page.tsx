'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase' // ← Assure-toi que ce chemin est correct

export default function ConnexionPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Identifiants invalides. Veuillez réessayer.')
    } else {
      router.push('/dashboard') // ← Redirige vers le tableau de bord
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border shadow rounded">
      <h2 className="text-xl font-bold mb-4">Connexion Investisseurs</h2>

      <input
        type="email"
        placeholder="Adresse courriel"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="relative mb-4">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 pr-10 border rounded"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-2.5 right-3 text-gray-500 hover:text-gray-800"
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.916 10c0-.464-.031-.92-.09-1.366M4.084 10c0-.464.031-.92.09-1.366M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7-5.064 7-9.542 7-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <button
        onClick={handleLogin}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
      >
        Connexion
      </button>

      <div className="text-center mt-4">
        <a href="/reset-password" className="text-blue-600 hover:underline">
          Mot de passe oublié ?
        </a>
      </div>
    </div>
  )
}
