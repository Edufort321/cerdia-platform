// app/api/ia-public/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: "Tu es l’IA officielle de la plateforme Investissement CERDIA.",
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
  })

  return NextResponse.json({ result: completion.choices[0].message?.content || 'Réponse indisponible' })
}
