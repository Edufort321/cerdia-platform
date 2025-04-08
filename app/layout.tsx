export const metadata = {
  title: 'Investissement CERDIA',
  description: 'L’intelligence au service de l’investissement',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  )
}