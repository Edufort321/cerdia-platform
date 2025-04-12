'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo et nom */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-cerdia.png"
            alt="Logo CERDIA"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-xl font-semibold text-[#0F1E47]">
            Investissement CERDIA
          </span>
        </div>

        {/* Liens de navigation */}
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-[#0F1E47] hover:underline font-medium">Accueil</Link>
          <Link href="#vision" className="text-[#0F1E47] hover:underline font-medium">Vision</Link>
          <Link href="/connexion" className="text-[#0F1E47] hover:underline font-medium">Connexion</Link>
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
