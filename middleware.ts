import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const adminRoutes = ['/dashboard/admin', '/api/ia-admin']

  const isProtected = adminRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  )

  if (isProtected) {
    if (!user) {
      return NextResponse.redirect(new URL('/connexion', req.url))
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || !['president', 'admin', 'vp'].includes(profile.role)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/dashboard/admin/:path*', '/api/ia-admin'],
}
