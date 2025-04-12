'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <section className="text-center">
      <div className="py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
          Investissement CERDIA
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Une vision d’envergure alliant intelligence artificielle, immobilier international, formation d’élite et expérience locative haut de gamme.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/devenir-investisseur">
            <span className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition shadow">
              Devenir investisseur
            </span>
          </Link>
          <Link href="/vision" className="text-blue-700 underline hover:text-blue-800 transition">
            Explorer la vision
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-20 px-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">💼 Piloté par l’IA</h2>
          <p className="text-gray-700">
            CERDIA s’appuie sur une IA stratégique pour analyser, prédire et accompagner l’investissement de façon autonome et proactive.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">🏝️ Immobilier d’exception</h2>
          <p className="text-gray-700">
            Accédez à des projets immobiliers ciblés au Canada, au Mexique, en République dominicaine et ailleurs — optimisés pour la rentabilité et la croissance durable.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">🎓 Formation stratégique</h2>
          <p className="text-gray-700">
            Programmes MBA, modules d’intelligence financière et parcours certifiants pour faire grandir les leaders de demain.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">🏨 Location haut de gamme</h2>
          <p className="text-gray-700">
            Une plateforme de location CERDIA pour une clientèle sélective — avec services VIP, conciergerie et rentabilité optimisée.
          </p>
        </div>
      </div>
    </section>
  )
}
