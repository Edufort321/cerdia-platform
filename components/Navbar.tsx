import Image from 'next/image'
import Link from 'next/link'

// ✅ Chemin relatif correct
import logo from '../public/logo-cerdia.png'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + nom */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo CERDIA" width={40} height={40} />
          <span className="text-xl font-semibold text-gray-800">Investissement CERDIA</span>
        </Link>

        {/* Menu de navigation */}
        <nav className="flex gap-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-700 transition font-medium">Accueil</Link>
          <Link href="/vision" className="text-gray-700 hover:text-blue-700 transition font-medium">Vision</Link>
          <Link href="/connexion" className="text-gray-700 hover:text-blue-700 transition font-medium">Connexion</Link>
          <Link href="/investir" className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold">
            Investir
          </Link>
        </nav>
      </div>
    </header>
  )
}
