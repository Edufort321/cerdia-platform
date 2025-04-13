// app/api/ia-public/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Assure-toi que la variable est bien définie dans Vercel
})

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: "Tu es l’IA officielle de la plateforme Investissement CERDIA. Tu donnes des réponses utiles, claires et stratégiques.",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const result = completion.choices[0].message?.content || 'Réponse indisponible'
    return NextResponse.json({ result })
  } catch (error) {
    console.error('❌ Erreur IA CERDIA :', error)
    return NextResponse.json(
      { error: "Erreur de traitement de l'IA CERDIA." },
      { status: 500 }
    )
  }
}
