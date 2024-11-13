import { NextRequest, NextResponse } from 'next/server'
import { auth } from './lib/utils/auth/auth'

export default async function middleware(req: NextRequest) {
  // check if router is protected
  const protectedRoutes = ['/mypage']
  const currentPath = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentPath)

  if (isProtectedRoute) {
    // check for valid session
    const { isAuthenticated } = await auth()
    if (!isAuthenticated)
      return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}
