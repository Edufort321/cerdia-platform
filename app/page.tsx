'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SECTION PRINCIPALE – HERO */}
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

      {/* SECTION – BANNER 4 PILIERS */}
      <section id="vision" className="w-full">
        <Image
          src="/cerdia-4piliers-banner.jpg"
          alt="Les 4 piliers stratégiques de CERDIA"
          width={1920}
          height={800}
          className="w-full h-auto"
        />
      </section>
    </div>
  )
}
