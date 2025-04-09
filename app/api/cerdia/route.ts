// app/api/cerdia/route.ts
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // stockée dans Vercel (sécurisé)
});

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4", // ou "gpt-3.5-turbo" selon ton plan
      messages: [{ role: "user", content: message }],
      temperature: 0.7,
    });

    return new Response(
      JSON.stringify({ reply: chatResponse.choices[0].message.content }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur OpenAI :", err);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
}
