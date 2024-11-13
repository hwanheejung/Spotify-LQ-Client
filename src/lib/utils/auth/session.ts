import jwt, { JwtPayload } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import 'server-only'

const options = {
  httpOnly: true,
  secure: true,
  sameSite: 'lax' as const,
  path: '/',
}

const accessInCookie = {
  name: 'access',
  duration: 24 * 60 * 60 * 1000,
}

const refreshInCookie = {
  name: 'refresh',
  duration: 7 * 24 * 60 * 60 * 1000,
}

interface DecodedToken extends JwtPayload {
  userId: string
}

export const decode = (accessToken: string): DecodedToken | null => {
  try {
    const decoded = jwt.decode(accessToken) as DecodedToken
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
    ...options,
    expires: new Date(Date.now() + accessInCookie.duration),
  })
  cookieStore.set(refreshInCookie.name, refreshToken, {
    ...options,
    expires: new Date(Date.now() + refreshInCookie.duration),
  })
}

export const verifySession = async (): Promise<{ userId: string } | null> => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(accessInCookie.name)?.value
  if (!accessToken) return null

  const session = await decode(accessToken)
  if (!session?.userId) return null

  return { userId: session.userId }
}

export const deleteSession = async () => {
  const cookieStore = await cookies()
  cookieStore.delete(accessInCookie.name)
  cookieStore.delete(refreshInCookie.name)
  redirect('/')
}
