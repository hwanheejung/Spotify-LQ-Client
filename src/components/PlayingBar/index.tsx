import CurrentTrack from './CurrentTrack'
import LoginBanner from './LoginBanner'
import Player from './Player'
import SidebarNav from './SidebarNav'

const PlayingBar = () => {
  const authenticated = true

  if (!authenticated) return <LoginBanner />
  return (
    <div className="flex w-full px-5 py-3">
      <CurrentTrack />
      <Player />
      <SidebarNav />
    </div>
  )
}

export default PlayingBar
