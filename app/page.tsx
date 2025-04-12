export default function Home() {
  return (
    <section className="min-h-screen px-6 py-20 max-w-5xl mx-auto text-slate-800 leading-relaxed space-y-20">
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold text-slate-900">Investissement CERDIA</h1>
        <p className="text-lg">
          Une vision d’envergure alliant intelligence artificielle, immobilier international,
          formation d’élite et expérience locative haut de gamme.
        </p>
        <a
          href="/investir"
          className="inline-block bg-blue-800 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-900 transition"
        >
          🚀 Devenir investisseur
        </a>
      </div>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-bold">🧠 Intelligence artificielle</h2>
          <p>
            CERDIA s’appuie sur une IA stratégique pour analyser, prédire et accompagner l’investissement de façon autonome et proactive.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">🌴 Immobilier d’exception</h2>
          <p>
            Accédez à des projets immobiliers ciblés au Canada, au Mexique, en République dominicaine et ailleurs — optimisés pour la rentabilité.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">🎓 Formation stratégique</h2>
          <p>
            Programmes MBA, intelligence financière, coaching personnalisé — pour former une élite entrepreneuriale.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">🏢 Location haut de gamme</h2>
          <p>
            Une plateforme locative CERDIA avec conciergerie, options VIP et rendement optimisé.
          </p>
        </div>
      </div>
    </section>
  )
}
