import { supabase } from '@/lib/supabaseClient'

type MemoryMessage = {
  role: 'user' | 'ia'
  content: string
}

type MemoryEntry = {
  user_id: string
  role: string
  messages: MemoryMessage[]
  created_at?: string
}

export async function saveMemory(
  user_id: string,
  role: string,
  messages: MemoryMessage[]
) {
  const { error } = await supabase.from('ia_memory').insert([
    {
      user_id,
      role,
      messages,
    },
  ])

  if (error) {
    console.error('❌ Erreur enregistrement mémoire IA:', error)
  }
}

export async function getLastMemories(user_id: string, limit = 10) {
  const { data, error } = await supabase
    .from('ia_memory')
    .select('*')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('❌ Erreur récupération mémoire IA:', error)
  }

  return data
}

