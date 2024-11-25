import { getSpotifyToken, verifySession } from '@/lib/api/auth'

interface Auth {
  isAuthenticated: boolean
  spotifyToken: string
}

export const auth = async (): Promise<Auth> => {
  const session = await verifySession()
  const token = await getSpotifyToken()

  return { isAuthenticated: !!session, spotifyToken: token }
}
