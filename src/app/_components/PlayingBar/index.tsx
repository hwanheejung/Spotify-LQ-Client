import { auth } from '@/lib/utils/auth/auth'
import LoginBanner from './LoginBanner'
import WebPlayback from './WebPlayback'

const PlayingBar = async () => {
  const { isAuthenticated, spotifyToken } = await auth()

  if (!isAuthenticated && !spotifyToken) return <LoginBanner />
  return <WebPlayback token={spotifyToken} />
}

export default PlayingBar
