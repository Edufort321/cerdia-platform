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

export async function saveMemory(entry: MemoryEntry) {
  const { data, error } = await supabase
    .from('ia_memory')
    .insert([entry])

  if (error) {
    console.error('❌ Erreur mémoire IA (save):', error)
  }

  return data
}

export async function getLastMemories(user_id: string, limit = 10) {
  const { data, error } = await supabase
    .from('ia_memory')
    .select('*')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('❌ Erreur mémoire IA (get):', error)
  }

  return data
}

