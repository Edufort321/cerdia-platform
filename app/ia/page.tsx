export default function PublicIACerdia() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        🧠 Assistant IA CERDIA
      </h1>

      {/* Zone de chat simplifiée */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <input
          type="text"
          placeholder="Posez votre question sur CERDIA..."
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button className="mt-3 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Envoyer
        </button>
      </div>

      {/* Vision romancée */}
      <div className="bg-gray-50 border-t pt-6 px-2 text-left text-gray-700">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">
          Une vision d’avenir avec l’IA CERDIA
        </h2>
        <p className="mb-2">
          Imaginez un monde où chaque décision d’investissement est guidée par une intelligence stratégique. CERDIA IA vous 
          accompagne dans l’analyse de projets immobiliers, la détection d’opportunités de marché, et la gestion proactive de votre capital.
        </p>
        <p className="mb-2">
          Que vous soyez investisseur novice ou stratège aguerri, notre IA adaptative vous offre des recommandations personnalisées, 
          répond à vos questions sur les projets en cours, et surveille en temps réel les tendances du marché mondial.
        </p>
        <p>
          L’IA CERDIA, c’est plus qu’un outil : c’est un partenaire de croissance, un cerveau digital à votre service, opérant jour et nuit pour faire 
          fructifier votre patrimoine avec vision et sécurité.
        </p>
      </div>
    </div>
  )
}
