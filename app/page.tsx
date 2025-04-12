'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SECTION HERO */}
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
             Devenir investisseur
          </button>
        </Link>
      </section>

      {/* SECTION BANNIÈRE 4 PILIERS */}
      <section id="vision" className="w-full">
        <Image
          src="/cerdia-4piliers-banner.jpg"
          alt="Les 4 piliers stratégiques de CERDIA"
          className="w-full h-auto"
          priority
        />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F1E47] text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-center gap-2 md:gap-0">
          <p>&copy; 2025 Investissement CERDIA. Tous droits réservés.</p>
          <p>Version IA propulsée par OpenAI – Propulsé depuis le Québec 🇨🇦</p>
        </div>
      </footer>
    </div>
  )
}
