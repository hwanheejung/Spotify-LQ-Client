import { GET_QUEUE } from '@/lib/queries/player.query'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { CurrentlyPlayingDTO } from '@/types/player'
import { useQuery } from '@apollo/client'
import Header from '../Header'
import CurrentTrack from './CurrentTrack'
import CurrentTrackSkeleton from './CurrentTrack.skeleton'

const NowPlaying = () => {
  const { isActive } = usePlaybackStore()
  const { data, loading, refetch } = useQuery(GET_QUEUE, {
    skip: !isActive,
  })

  if (loading || !data)
    return (
      <div>
        <Header title="Now Playing" />
        <CurrentTrackSkeleton />
      </div>
    )

  const track = data.getQueue.currently_playing as CurrentlyPlayingDTO

  if (!track) refetch()

  return (
    <div>
      <Header title={track ? track.album.name : 'Now Playing'} />
      <div className="px-3">
        {data?.getQueue.currently_playing ? (
          <CurrentTrack track={track} />
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  )
}
export default NowPlaying
