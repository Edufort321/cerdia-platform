'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo seul */}
        <div className="flex-shrink-0">
          <Image
            src="/logo-cerdia.png"
            alt="Logo CERDIA"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Liens */}
        <nav className="flex items-center gap-10">
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
