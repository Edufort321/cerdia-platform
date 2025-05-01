import { SupabaseClient } from '@supabase/supabase-js'

type MemoryMessage = {
  role: 'user' | 'ia'
  content: string
}

type MemoryEntry = {
  user_id: string
  role: string
  messages: MemoryMessage[]
  created_at?: string
  is_strategic?: boolean
}

export async function saveMemory(
  supabase: SupabaseClient,
  user_id: string,
  role: string,
  messages: MemoryMessage[]
): Promise<boolean> {
  const { error } = await supabase.from('ia_memory').insert([
    {
      user_id,
      role,
      messages,
    },
  ])

  if (error) {
    console.error('❌ Erreur enregistrement mémoire IA:', error.message)
    return false
  }

  return true
}

export async function getLastMemories(
  supabase: SupabaseClient,
  user_id: string,
  limit = 10
): Promise<MemoryEntry[] | null> {
  const { data, error } = await supabase
    .from('ia_memory')
    .select('*')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('❌ Erreur récupération mémoire IA:', error.message)
    return null
  }

  return data
}
