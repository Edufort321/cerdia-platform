'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* ✅ NAVBAR */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-900">Investissement CERDIA</h1>
          <div className="space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-700">Accueil</Link>
            <Link href="/vision" className="hover:text-blue-700">Vision</Link>
            <Link href="/connexion" className="hover:text-blue-700">Connexion</Link>
            <Link href="/devenir-investisseur" className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition">Investir</Link>
          </div>
        </nav>
      </header>

      {/* ✅ HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-800">L’intelligence au service de l’investissement</h2>
        <p className="text-lg max-w-xl mx-auto text-gray-600">
          Une plateforme innovante propulsée par l’IA, dédiée à la croissance du capital, à la transparence et à la performance à long terme.
        </p>
        <div className="mt-8">
          <Link href="/devenir-investisseur">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 text-lg shadow">
              🚀 Devenir investisseur
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ PILIERS */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-16">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Intelligence Artificielle</h3>
          <p className="text-sm text-gray-600">Analyse en temps réel, prise de décision IA et automatisation stratégique pour des résultats concrets.</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Immobilier Global</h3>
          <p className="text-sm text-gray-600">Investissements locatifs en croissance dans des marchés porteurs à l’échelle internationale.</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Vision à long terme</h3>
          <p className="text-sm text-gray-600">
            Structure visionnaire orientée vers une croissance durable à long terme, portée par des fondateurs engagés.
          </p>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Investissement CERDIA — Tous droits réservés.
      </footer>
    </div>
  )
}
