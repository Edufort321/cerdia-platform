export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8 text-center bg-white">
      <h1 className="text-4xl font-bold mb-4">Investissement CERDIA</h1>
      <p className="text-lg text-gray-600 mb-8">
        L’intelligence au service de l’investissement.
      </p>
      <div className="flex gap-4">
        <a
          href="/devenir-investisseur"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Devenir investisseur
        </a>
        <a
          href="/vision"
          className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          Explorer la vision
        </a>
      </div>
    </section>
  )
}
