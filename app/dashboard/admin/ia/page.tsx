'use client'

import { useState } from 'react'

interface Message {
  type: 'user' | 'ia'
  text: string
}

export default function AdminIACerdiaPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { type: 'user', text: trimmed }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ia-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: trimmed }),
      })

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        { type: 'ia', text: data.result || 'Réponse indisponible.' },
      ])
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { type: 'ia', text: '❌ Erreur de communication avec IA Admin.' },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">🧠 IA CERDIA – Mode Administrateur</h1>

      <div className="bg-gray-100 p-4 rounded-md shadow-inner h-[400px] overflow-y-auto mb-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded mb-2 max-w-[85%] ${
              msg.type === 'user' ? 'bg-blue-200 ml-auto text-right' : 'bg-white text-left border'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p className="text-sm text-gray-500">⏳ Réponse IA en cours...</p>}
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Commande IA stratégique, exemple : ajoute une section dans /page.tsx..."
          className="flex-1 border p-2 rounded shadow"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-800 hover:bg-blue-900 text-white px-4 rounded"
        >
          Envoyer
        </button>
      </div>

      <p className="text-sm text-center text-gray-500 italic">
        ⚙️ Cette IA peut exécuter des actions réservées à l’administration CERDIA.
      </p>
    </div>
  )
}
