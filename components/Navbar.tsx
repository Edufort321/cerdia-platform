'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo-cerdia.png'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo aligné gauche */}
        <Link href="/">
          <Image src={logo} alt="Logo CERDIA" width={60} height={60} priority />
        </Link>

        {/* Boutons cliquables à droite */}
        <nav className="flex gap-5">
          <Link href="/" className="bg-[#0a1a2f] text-white px-5 py-2 rounded-md hover:bg-[#132c4a] transition">
            Accueil
          </Link>
          <Link href="/vision" className="bg-[#0a1a2f] text-white px-5 py-2 rounded-md hover:bg-[#132c4a] transition">
            Vision
          </Link>
          <Link href="/connexion" className="bg-[#0a1a2f] text-white px-5 py-2 rounded-md hover:bg-[#132c4a] transition">
            Connexion
          </Link>
          <Link href="/investir" className="bg-[#0a1a2f] text-white px-5 py-2 rounded-md hover:bg-[#132c4a] transition">
            Investir
          </Link>
        </nav>
      </div>
    </header>
  )
}
