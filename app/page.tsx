'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SECTION PRINCIPALE */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0F1E47] font-serif mb-6">
          Une vision d’envergure alliant IA, immobilier, formation et luxe locatif
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          L'intelligence au service de l'investissement. Rejoignez un réseau haut de gamme 
          et faites croître votre capital stratégiquement.
        </p>
        <Link href="/investir">
          <button className="bg-[#0F1E47] text-white px-6 py-3 rounded-full text-lg hover:bg-[#1a2960] transition">
            🚀 Devenir investisseur
          </button>
        </Link>
      </section>

      {/* MODULES */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-12" id="vision">
        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">🌟 Intelligence artificielle</h2>
          <p className="text-gray-700">
            CERDIA s’appuie sur une IA stratégique pour analyser, prédire et accompagner
            l’investissement de façon autonome et proactive.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">🌳 Immobilier d’exception</h2>
          <p className="text-gray-700">
            Accédez à des projets immobiliers ciblés au Canada, au Mexique, en République dominicaine 
            et ailleurs — optimisés pour la rentabilité durable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">🎓 Formation stratégique</h2>
          <p className="text-gray-700">
            Programmes MBA, intelligence financière, coaching personnalisé — pour former une 
            élite entrepreneuriale.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">🏢 Location haut de gamme</h2>
          <p className="text-gray-700">
            Une plateforme locative CERDIA avec conciergerie, options VIP et rendement optimisé.
          </p>
        </div>
      </section>
    </div>
  )
}
