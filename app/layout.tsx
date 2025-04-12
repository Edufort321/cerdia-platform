import '../styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Investissement CERDIA',
  description: 'L’intelligence au service de l’investissement.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  )
}
