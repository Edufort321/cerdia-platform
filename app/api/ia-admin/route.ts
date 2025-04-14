// app/api/ia-admin/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  try {
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

    return NextResponse.json({
      result: completion.choices[0].message?.content ?? 'Réponse indisponible',
    })
  } catch (err) {
    console.error('Erreur IA Admin:', err)
    return NextResponse.json(
      { error: 'Erreur IA admin' },
      { status: 500 }
    )
  }
}
