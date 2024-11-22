import { auth } from '@/lib/utils/auth/auth'
import CurrentTrack from './CurrentTrack'
import LoginBanner from './LoginBanner'
import Player from './Player'
import SidebarNav from './SidebarNav'

const PlayingBar = async () => {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) return <LoginBanner />
  return (
    <div className="flex w-full px-5 py-3">
      <CurrentTrack />
      <Player />
      <SidebarNav />
    </div>
  )
}

export default PlayingBar
