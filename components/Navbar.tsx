'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo-cerdia.png'

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo à gauche */}
        <Link href="/">
          <Image src={logo} alt="Logo CERDIA" width={60} height={60} priority />
        </Link>

        {/* Menu stylisé à droite */}
        <nav className="flex gap-6">
          {[
            { href: '/', label: 'Accueil' },
            { href: '/vision', label: 'Vision' },
            { href: '/connexion', label: 'Connexion' },
            { href: '/investir', label: 'Investir' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-[#0a1a2f] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#132c4a] transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
