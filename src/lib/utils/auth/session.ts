import 'server-only'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import jwt, { JwtPayload } from 'jsonwebtoken'

const accessInCookie = {
  name: 'acceess',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax' as const,
    path: '/',
  },
  duration: 24 * 60 * 60 * 1000,
}

const refreshInCookie = {
  name: 'refresh',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax' as const,
    path: '/',
  },
  duration: 7 * 24 * 60 * 60 * 1000,
}

interface DecodedToken extends JwtPayload {
  userId: string
}

const decode = (accessToken: string): DecodedToken | null => {
  try {
    const decoded = jwt.decode(accessToken) as DecodedToken
    console.log(decoded)
    return decoded
  } catch (error) {
    console.error('Invalid token:', error)
    return null
  }
}

export const createSession = async (
  accessToken: string,
  refreshToken: string,
) => {
  const cookieStore = await cookies()
  cookieStore.set(accessInCookie.name, accessToken, {
    ...accessInCookie.options,
    expires: new Date(Date.now() + accessInCookie.duration),
  })
  cookieStore.set(refreshInCookie.name, refreshToken, {
    ...refreshInCookie.options,
    expires: new Date(Date.now() + refreshInCookie.duration),
  })
}

export const verifySession = async (): Promise<{ userId: string } | void> => {
  const cookieStore = await cookies()
  const tokenFromCookie = cookieStore.get(accessInCookie.name)?.value
  if (!tokenFromCookie) redirect('/login')

  const session = await decode(tokenFromCookie)
  if (!session?.userId) redirect('/login')

  return { userId: session.userId }
}

export const deleteSession = async () => {
  const cookieStore = await cookies()
  cookieStore.delete(accessInCookie.name)
  redirect('/login')
}
