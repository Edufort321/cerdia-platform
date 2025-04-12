'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo-cerdia.png'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Logo CERDIA" width={40} height={40} />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 items-center text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-blue-700 transition">Accueil</Link>
          <Link href="/vision" className="hover:text-blue-700 transition">Vision</Link>
          <Link href="/connexion" className="hover:text-blue-700 transition">Connexion</Link>
          <Link
            href="/investir"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Investir
          </Link>
        </nav>
      </div>
    </header>
  )
}
