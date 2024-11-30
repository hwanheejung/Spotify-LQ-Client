import { GET_QUEUE } from '@/lib/queries/player.query'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { CurrentlyPlayingDTO } from '@/types/player'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import Header from '../Header'
import CurrentTrack from './CurrentTrack'
import CurrentTrackSkeleton from './CurrentTrack.skeleton'

const NowPlaying = () => {
  const { isActive, currentTrack } = usePlaybackStore()
  const { data, loading, refetch } = useQuery(GET_QUEUE, {
    skip: !isActive,
  })

  useEffect(() => {
    if (
      currentTrack &&
      data?.getQueue?.currently_playing?.id !== currentTrack.id
    )
      refetch()
  }, [currentTrack, data, refetch])

  const track = data?.getQueue?.currently_playing as CurrentlyPlayingDTO

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
