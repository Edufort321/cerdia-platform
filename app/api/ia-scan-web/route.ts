// app/api/ia-scan-web/route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { url } = await req.json()

  return NextResponse.json({
    result: `Analyse fictive réussie pour : ${url}`,
  })
}
