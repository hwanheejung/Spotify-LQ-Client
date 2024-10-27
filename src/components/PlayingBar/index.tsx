import CurrentTrack from './CurrentTrack'
import Player from './Player'
import SidebarNav from './SidebarNav'

const PlayingBar = () => {
  return (
    <div className="flex w-full">
      <CurrentTrack />
      <Player />
      <SidebarNav />
    </div>
  )
}

export default PlayingBar
