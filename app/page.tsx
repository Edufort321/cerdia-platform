'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 tracking-tight">
          Investissement CERDIA
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Une vision d’envergure alliant intelligence artificielle, immobilier international,
          formation d’élite et expérience locative haut de gamme.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/devenir-investisseur">
            <span className="btn-primary">🚀 Devenir investisseur</span>
          </Link>
          <Link href="/vision" className="text-blue-700 underline hover:text-blue-800 text-base mt-1 md:mt-0">
            Explorer la vision
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🧠 Intelligence artificielle</h2>
          <p className="text-gray-700">
            CERDIA s’appuie sur une IA stratégique pour analyser, prédire et accompagner l’investissement de façon autonome et proactive.
          </p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🏝️ Immobilier d’exception</h2>
          <p className="text-gray-700">
            Accédez à des projets immobiliers ciblés au Canada, au Mexique, en République dominicaine et ailleurs —
            optimisés pour la rentabilité et la croissance durable.
          </p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🎓 Formation stratégique</h2>
          <p className="text-gray-700">
            Programmes MBA, modules d’intelligence financière et parcours certifiants pour faire grandir les leaders de demain.
          </p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🏨 Location haut de gamme</h2>
          <p className="text-gray-700">
            Une plateforme de location CERDIA pour une clientèle sélective — avec services VIP, conciergerie et rentabilité optimisée.
          </p>
        </div>
      </section>
    </div>
  )
}
