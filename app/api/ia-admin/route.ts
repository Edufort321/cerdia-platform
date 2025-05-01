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
    console.log('📡 Requête IA reçue')
    const supabase = createRouteHandlerClient({ cookies })

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError) console.error('❌ Erreur session Supabase:', sessionError)

    const user = session?.user
    if (!user) {
      console.warn('⛔ Utilisateur non authentifié')
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profileError) console.error('❌ Erreur profil Supabase:', profileError)

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

    // ✅ Correction ici : ajout de supabase en premier argument
    await saveMemory(supabase, user.id, profile.role, [
      { role: 'user', content: prompt },
      { role: 'ia', content: result },
    ])

    return NextResponse.json({ result })
  } catch (err) {
    console.error('🔥 Erreur IA Admin:', err)
    return NextResponse.json({ error: 'Erreur IA admin' }, { status: 500 })
  }
}
