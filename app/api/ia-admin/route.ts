// app/api/ia-admin/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { saveMemory } from '@/lib/ia/memory'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  try {
    // 1. Authentifie l'utilisateur via Supabase middleware
    const supabase = createMiddlewareSupabaseClient({ req, res: NextResponse.next(), cookies })
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile) {
      return NextResponse.json({ error: 'Profil introuvable' }, { status: 403 })
    }

    // 2. Appel OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      temperature: 0.5,
      messages: [
        {
          role: 'system',
          content: `
Tu es l’IA officielle de la direction Investissement CERDIA. Ton rôle est stratégique : 
Tu peux aider à créer des composants, à générer du code TypeScript ou React,
proposer des solutions pour optimiser le site CERDIA, les produits eCommerce ou le dashboard IA.

Réponds toujours dans un ton professionnel et structuré. Pose des questions si nécessaire avant d’agir.
        `.trim(),
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const result = completion.choices[0].message?.content ?? 'Réponse indisponible'

    // 3. Sauvegarde mémoire dans Supabase
    await saveMemory(user.id, profile.role, [
      { role: 'user', content: prompt },
      { role: 'ia', content: result },
    ])

    return NextResponse.json({ result })
  } catch (err) {
    console.error('Erreur IA Admin:', err)
    return NextResponse.json(
      { error: 'Erreur IA admin' },
      { status: 500 }
    )
  }
}
