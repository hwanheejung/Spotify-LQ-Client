import { CurrentlyPlayingDTO } from '@/types/player'
import Header from '../Header'
import CurrentTrack from './CurrentTrack'
import CurrentTrackSkeleton from './CurrentTrack.skeleton'

interface NowPlayingProps {
  track?: CurrentlyPlayingDTO
  loading: boolean
}

const NowPlaying = ({ loading, track }: NowPlayingProps) => {
  return (
    <div>
      <Header title={track ? track.album.name : 'Select the track'} />
      <div className="px-3">
        {loading || !track ? (
          <CurrentTrackSkeleton />
        ) : (
          <CurrentTrack track={track} />
        )}
        {!loading && !track && <div>No data</div>}
      </div>
    </div>
  )
}
export default NowPlaying
