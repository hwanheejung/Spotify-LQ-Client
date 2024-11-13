import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { decode } from './lib/utils/auth/session'

export default async function middleware(req: NextRequest) {
  // check if router is protected
  const protectedRoutes = ['/mypage']
  const currentPath = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentPath)

  if (isProtectedRoute) {
    // check for valid session
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('access')?.value
    if (!accessToken) return NextResponse.redirect(new URL('/', req.nextUrl))
    const session = await decode(accessToken)
    if (!session?.userId)
      return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}
