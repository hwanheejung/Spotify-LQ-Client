'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { extractSessionId } from '../utils/auth/extract-sessionid'
import { deleteApi, get, post } from './base'

export const getSpotifyUrl = async () => {
  const { data } = await get(`/api/auth/spotify-auth-url`)
  return data.url
}

export const login = async (code: string) => {
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

  return data
}

export const logout = async () => {
  await deleteApi('/api/auth/logout')
  revalidateTag('session-status')
}

export const verifySession = async (): Promise<boolean> => {
  const { data } = await get('/api/auth/status', {
    next: {
      tags: ['session-status'],
    },
  })
  return data.authenticated
}

export const getSpotifyToken = async (): Promise<string> => {
  const { data } = await get('/api/auth/spotify-token')

  return data.token
}
