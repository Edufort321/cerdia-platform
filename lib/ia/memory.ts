import { supabase } from '@/lib/supabaseClient'

type MemoryEntry = {
  user_id: string
  role: string
  context: string
  created_at?: string
}

export async function saveMemory(entry: MemoryEntry) {
  const { data, error } = await supabase
    .from('ia_memory')
    .insert([entry])

  if (error) {
    console.error('Erreur lors de l’enregistrement mémoire IA:', error)
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
    console.error('Erreur lors de la récupération de la mémoire IA:', error)
  }

  return data
}

