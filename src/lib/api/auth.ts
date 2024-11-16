'use server'

import { User } from '@/types/auth'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { deleteApi, get, post } from './base'
import { extractSessionId } from '../utils/auth/extractSessionId'

export const getSpotifyUrl = async () => {
  const { data } = await get(`/api/auth/spotify-auth-url`)
  return data.url
}

export const login = async (code: string): Promise<User> => {
  const { data, headers } = await post(`/api/auth/spotify-callback`, {
    body: JSON.stringify({ code }),
  })

  const sessionId = extractSessionId(headers.get('set-cookie')!)
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'sessionId',
    value: sessionId || '',
    httpOnly: true,
    path: '/',
  })

  return data.user
}

export const logout = async () => {
  await deleteApi('/api/auth/logout')
  revalidateTag('session')
}

export const verifySession = async (): Promise<boolean> => {
  const { data } = await get('/api/auth/status', {
    next: {
      tags: ['session'],
    },
  })
  return data.authenticated
}
