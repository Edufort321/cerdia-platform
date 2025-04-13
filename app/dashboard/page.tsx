'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (!data.session) {
        router.push('/connexion')
      }
    }

    checkAuth()
  }, [router])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bienvenue sur le Dashboard CERDIA</h1>
      <p className="text-gray-600">Contenu confidentiel réservé aux membres autorisés.</p>
    </div>
  )
}
