import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { saveMemory } from '@/lib/ia/memory'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  try {
    // Authentifie l’utilisateur via Supabase
    const supabase = createRouteHandlerClient({ cookies })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    const user = session?.user

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

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      temperature: 0.5,
      messages: [
        {
          role: 'system',
          content: `
Tu es l’IA officielle de la direction Investissement CERDIA. Ton rôle est stratégique : 
Tu peux aider à créer des composants, générer du code TypeScript ou React,
proposer des solutions pour optimiser le site CERDIA, les produits eCommerce ou le dashboard IA.

Réponds toujours dans un ton professionnel, clair, structuré. Pose des questions si nécessaire avant d’agir.
        `.trim(),
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const result = completion.choices[0].message?.content ?? 'Réponse indisponible'

    await saveMemory(user.id, profile.role, [
      { role: 'user', content: prompt },
      { role: 'ia', content: result },
    ])

    return NextResponse.json({ result })
  } catch (err) {
    console.error('Erreur IA Admin:', err)
    return NextResponse.json({ error: 'Erreur IA admin' }, { status: 500 })
  }
}
