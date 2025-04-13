'use client'

import { useState } from 'react'

interface Message {
  type: 'user' | 'ia'
  text: string
}

export default function IAPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { type: 'user', text: trimmed }])
    setInput('')

    // Simuler réponse IA
    setTimeout(() => {
      const responseText = `Merci pour votre message! L’IA CERDIA vous répondra bientôt avec une analyse.`
      setMessages((prev) => [...prev, { type: 'ia', text: responseText }])
    }, 1000)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">💡 Assistant IA CERDIA</h1>

      <div className="bg-gray-50 rounded-md p-4 border mb-6 h-[300px] overflow-y-auto shadow-inner">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded max-w-[80%] ${
              msg.type === 'user'
                ? 'bg-blue-100 ml-auto text-right'
                : 'bg-white text-left border'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Posez une question librement..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded shadow-sm"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-700 text-white px-4 rounded"
        >
          Envoyer
        </button>
      </div>

      {/* Vision romancée */}
      <div className="bg-white rounded shadow-md p-6 border">
        <h2 className="text-xl font-semibold mb-2">🧠 Une vision d’avenir avec l’IA CERDIA</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          Imaginez un monde où chaque décision d’investissement est guidée par une intelligence stratégique.
          CERDIA IA vous accompagne dans l’analyse de projets immobiliers, la détection d’opportunités de marché,
          et la gestion proactive de votre capital.
          <br /><br />
          Que vous soyez investisseur novice ou stratège aguerri, notre IA adaptative vous offre des
          recommandations personnalisées, répond à vos questions sur les projets en cours, et surveille
          en temps réel les tendances du marché mondial.
          <br /><br />
          L’IA CERDIA, c’est plus qu’un outil : c’est un partenaire de croissance,
          un cerveau digital à votre service, opérant jour et nuit pour faire fructifier votre patrimoine
          avec vision et sécurité.
        </p>
      </div>
    </div>
  )
}
