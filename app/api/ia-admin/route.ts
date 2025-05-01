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
    // Authentifie l'utilisateur via Supabase (session côté API)
    const supabase = createRouteHandlerClient({ cookies })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    const user = session?.user
    if (!user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    // Va chercher le rôle à partir de la table "profiles"
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Profil introuvable' }, { status: 403 })
    }

    // Appel à OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      temperature: 0.5,
      messages: [
        {
          role: 'system',
          content: `
Tu es l’IA officielle de la direction Investissement CERDIA. Ton rôle est stratégique. 
Tu aides à générer des idées, du code, des composants React, des propositions d’amélioration
pour le site, le eCommerce, les dashboards ou la vision d’affaires.

Réponds toujours de manière professionnelle, claire et concise.
Pose une question si nécessaire avant d’agir.
          `.trim(),
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const result = completion.choices[0].message?.content ?? 'Réponse indisponible'

    // Sauvegarde dans ia_memory
    await saveMemory(supabase, user.id, profile.role, [
      { role: 'user', content: prompt },
      { role: 'ia', content: result },
    ])

    return NextResponse.json({ result })
  } catch (err: any) {
    console.error('Erreur IA Admin complète:', err)

    return NextResponse.json(
      {
        error: 'Erreur IA admin',
        details: err?.message || JSON.stringify(err),
      },
      { status: 500 }
    )
  }
}
