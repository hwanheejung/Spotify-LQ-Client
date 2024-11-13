'use server'

import { User } from '@/types/auth'
import { createSession } from '../utils/auth/session'

const handleResponse = async (res: Response) => {
  const text = await res.text()

  if (!res.ok)
    throw new Error(
      `Request failed: ${res.status} - ${res.statusText} - ${text || 'No error message provided'}`,
    )

  if (!text) throw new Error('No response body')

  try {
    return JSON.parse(text)
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw new Error(`Failed to parse JSON: ${error.message}`)
  }
}

export const getSpotifyUrl = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/auth/spotify-auth-url`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await handleResponse(res)
  return data.url
}

export const login = async (code: string): Promise<User> => {
  const res = await fetch(`${process.env.API_HOST}/api/auth/spotify-callback`, {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data: User = await handleResponse(res)
  const { accessToken, refreshToken } = data.token

  await createSession(accessToken, refreshToken)

  return data
}
