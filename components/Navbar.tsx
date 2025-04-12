'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo-cerdia.png'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="Logo CERDIA" width={40} height={40} />
        <span className="text-lg font-semibold text-gray-900">Investissement CERDIA</span>
      </div>
      <nav className="flex gap-6 text-sm font-medium text-gray-700">
        <Link href="/">Accueil</Link>
        <Link href="/vision">Vision</Link>
        <Link href="/connexion">Connexion</Link>
        <Link href="/investir">Investir</Link>
      </nav>
    </header>
  )
}
