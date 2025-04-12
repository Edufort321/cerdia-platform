'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg md:text-xl font-semibold tracking-tight text-blue-900 hover:text-blue-800 transition">
          CERDIA
        </Link>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li><Link href="/" className="hover:text-blue-700 transition">Accueil</Link></li>
          <li><Link href="/vision" className="hover:text-blue-700 transition">Vision</Link></li>
          <li><Link href="/connexion" className="hover:text-blue-700 transition">Connexion</Link></li>
          <li>
            <Link href="/devenir-investisseur">
              <span className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition shadow">
                Investir
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
