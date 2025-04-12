'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-white shadow-md">
      {/* Logo CERDIA à gauche */}
      <div className="flex items-center gap-4">
        <Image
          src="/logo-cerdia.png"
          alt="Logo CERDIA"
          width={60}
          height={60}
          className="object-contain"
        />
        <span className="text-xl font-semibold text-[#0F1E47] hidden md:inline">
          Investissement CERDIA
        </span>
      </div>

      {/* Liens à droite avec espace de 2cm (~gap-8 = 2rem) */}
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
    </header>
  )
}
