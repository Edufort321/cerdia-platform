export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-800">
        {/* ❌ On retire ceci */}
        {/* <Header /> */}
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
