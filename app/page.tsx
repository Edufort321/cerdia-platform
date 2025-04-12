'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <section className="text-center">
      {/* 🎯 HERO */}
      <div className="py-24 px-6">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight mb-4">
          Investissement CERDIA
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Une vision d’envergure alliant intelligence artificielle, immobilier international, formation d’élite et expérience locative haut de gamme.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/devenir-investisseur">
            <span className="btn-primary">🚀 Devenir investisseur</span>
          </Link>
          <Link href="/vision" className="text-blue-700 underline hover:text-blue-800 transition">
            Explorer la vision
          </Link>
        </div>
      </div>

      {/* 🌍 4 PILIERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-20 px-6">
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 text-left">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🧠 Intelligence artificielle</h2>
          <p className="text-gray-700">
            CERDIA s’appuie sur une IA stratégique pour analyser, prédire et accompagner l’investissement de façon autonome et proactive.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 text-left">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🏝️ Immobilier d’exception</h2>
          <p className="text-gray-700">
            Accédez à des projets immobiliers ciblés au Canada, au Mexique, en République dominicaine et ailleurs — optimisés pour la rentabilité et la croissance durable.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 text-left">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🎓 Formation stratégique</h2>
          <p className="text-gray-700">
            Programmes MBA, modules d’intelligence financière et parcours certifiants pour faire grandir les leaders de demain.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 text-left">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">🏨 Location haut de gamme</h2>
          <p className="text-gray-700">
            Une plateforme de location CERDIA pour une clientèle sélective — avec services VIP, conciergerie et rentabilité optimisée.
          </p>
        </div>
      </div>
    </section>
  )
}
