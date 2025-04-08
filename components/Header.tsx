export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Investissement CERDIA</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:text-blue-400">Accueil</a>
        <a href="#" className="hover:text-blue-400">Vision</a>
        <a href="#" className="hover:text-blue-400">Connexion</a>
      </nav>
    </header>
  )
}
