'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo CERDIA */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo-cerdia.png"
            alt="Logo CERDIA"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-xl font-semibold text-[#0F1E47] hidden sm:inline">
            Investissement CERDIA
          </span>
        </div>

        {/* Liens de navigation */}
        <nav className="flex items-center gap-10">
          <Link href="/" className="text-[#0F1E47] font-medium hover:underline">Accueil</Link>
          <Link href="#vision" className="text-[#0F1E47] font-medium hover:underline">Vision</Link>
          <Link href="/connexion" className="text-[#0F1E47] font-medium hover:underline">Connexion</Link>
          <Link href="/investir">
            <button className="bg-[#0F1E47] text-white px-5 py-2 rounded-full hover:bg-[#1a2960] transition">
              Investir
            </button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
