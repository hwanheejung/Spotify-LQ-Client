'use server'

import { User } from '@/types/auth'
import { cookies } from 'next/headers'
import { get, post } from './base'

export const getSpotifyUrl = async () => {
  const res = await get(`/api/auth/spotify-auth-url`)
  return res.url
}

interface LoginResponse {
  message: string
  user: User
}

export const login = async (code: string): Promise<User> => {
  const res: LoginResponse = await post(`/api/auth/spotify-callback`, {
    body: JSON.stringify({ code }),
  })

  console.log('login', res)

  return res.user
}

export const check = async () => {
  const cookieStore = await cookies()

  cookieStore.set({
    name: 'testing',
    value: 'hihi',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  })

  console.log('cookieStore', cookieStore.getAll())
  const sessionId = cookieStore.get('sessionId')?.value
  console.log('sessionId', sessionId)
}

export const verifySession = async (): Promise<boolean> => {
  const res = await get('/api/auth/status')

  console.log('verifySession', res)
  return res.authenticated
}
