import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUser } from '@/lib/user-cookies'

const REGISTER_PATH = '/register'

export function middleware(req: NextRequest) {
  const user = getUser()
  const isRegisterPath = req.nextUrl.pathname.startsWith(REGISTER_PATH)

  // Redirect to the register page if the user data is not registered
  if (!user && !isRegisterPath) {
    return NextResponse.redirect(new URL(REGISTER_PATH, req.url))
  }

  // Continue with the request
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next\\/static|_next\\/image).*)'], // Prevent running on static files
}
