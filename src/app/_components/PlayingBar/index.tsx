import { auth } from '@/lib/utils/auth/auth'
import LoginBanner from './LoginBanner'
import WebPlayback from './WebPlayback'
import CurrentTrack from './CurrentTrack'
import Player from './Player'
import SidebarNav from './SidebarNav'

const PlayingBar = async () => {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) return <LoginBanner />
  return (
    <WebPlayback>
      <CurrentTrack />
      <Player />
      <SidebarNav />
    </WebPlayback>
  )
}

export default PlayingBar
