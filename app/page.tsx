import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER NAVIGATION */}
      <header className="flex items-center justify-between px-8 py-5 shadow-sm bg-white">
        {/* Logo CERDIA à gauche */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo-cerdia.png"
            alt="Logo CERDIA"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Liens à droite */}
        <nav className="flex gap-4">
          <Link href="/" className="px-4 py-2 bg-[#0F1E47] text-white rounded-md hover:bg-[#1a2960] transition">Accueil</Link>
          <Link href="#vision" className="px-4 py-2 bg-[#0F1E47] text-white rounded-md hover:bg-[#1a2960] transition">Vision</Link>
          <Link href="/connexion" className="px-4 py-2 bg-[#0F1E47] text-white rounded-md hover:bg-[#1a2960] transition">Connexion</Link>
          <Link href="/investir" className="px-4 py-2 bg-[#0F1E47] text-white rounded-md hover:bg-[#1a2960] transition">Investir</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0F1E47] font-serif mb-6">
          Une vision d’envergure alliant IA, immobilier, formation et luxe locatif
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          L'intelligence au service de l'investissement. Rejoignez un réseau haut de gamme 
          et faites croître votre capital stratégiquement.
        </p>
        <Link href="/investir" className="btn-primary">
          🚀 Devenir investisseur
        </Link>
      </section>

      {/* MODULES */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">
            🌟 Intelligence artificielle
          </h2>
          <p className="text-gray-700">
            CERDIA s’appuie sur une IA stratégique pour analyser, prédire et accompagner
            l’investissement de façon autonome et proactive.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">
            🌳 Immobilier d’exception
          </h2>
          <p className="text-gray-700">
            Accédez à des projets immobiliers ciblés au Canada, au Mexique, en République dominicaine 
            et ailleurs — optimisés pour la rentabilité durable.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">
            🎓 Formation stratégique
          </h2>
          <p className="text-gray-700">
            Programmes MBA, intelligence financière, coaching personnalisé — pour former une 
            élite entrepreneuriale.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif text-[#0F1E47] mb-2">
            🏢 Location haut de gamme
          </h2>
          <p className="text-gray-700">
            Une plateforme locative CERDIA avec conciergerie, options VIP et rendement optimisé.
          </p>
        </div>
      </section>
    </div>
  )
}
