import CerdiaIAChat from '@/components/CerdiaIAChat'

export default function Dashboard() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">🎯 Tableau de bord investisseur</h1>
      <CerdiaIAChat mode="investor" />
    </main>
  )
}
