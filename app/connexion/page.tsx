'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react' // si tu utilises lucide-react, sinon je te donne le SVG après

export default function ConnexionPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    // À connecter avec Supabase Auth
    console.log('Login', email, password)
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border shadow rounded">
      <h2 className="text-xl font-bold mb-4">Connexion Investisseurs</h2>

      {/* Email */}
      <input
        type="email"
        placeholder="Adresse courriel"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      {/* Mot de passe + œil */}
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
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Bouton */}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
      >
        Connexion
      </button>

      {/* Lien mot de passe oublié */}
      <div className="text-center mt-4">
        <a href="/reset-password" className="text-blue-600 hover:underline">
          Mot de passe oublié ?
        </a>
      </div>
    </div>
  )
}
