'use client'

import { useState } from 'react'

export default function IAPage() {
  const [url, setUrl] = useState('')
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleScan = async () => {
    setLoading(true)
    setResponse(null)

    try {
      const res = await fetch('/api/ia-scan-web', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })

      const data = await res.json()
      setResponse(data.result || 'Aucune réponse')
    } catch (e) {
      setResponse("Erreur d'analyse.")
    }

    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-[#0F1E47] mb-6">🧠 Assistant IA CERDIA</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Entrez une URL à scanner"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button
        onClick={handleScan}
        disabled={loading || !url}
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        {loading ? 'Analyse en cours...' : 'Scanner l’URL'}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded text-gray-800">
          <h2 className="font-semibold mb-2">📄 Résultat :</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}
