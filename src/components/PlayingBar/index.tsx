import CurrentTrack from './CurrentTrack'
import Player from './Player'
import SidebarNav from './SidebarNav'

const PlayingBar = () => {
  return (
    <div className="flex w-full px-5 py-3">
      <CurrentTrack />
      <Player />
      <SidebarNav />
    </div>
  )
}

export default PlayingBar
