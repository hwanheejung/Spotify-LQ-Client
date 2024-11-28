import { GET_QUEUE } from '@/lib/queries/player.query'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { CurrentlyPlayingDTO, QueueItemDTO } from '@/types/player'
import { useQuery } from '@apollo/client'
import Header from '../Header'
import Track from './Track'

const Queue = () => {
  const { isActive } = usePlaybackStore()
  const { data, loading } = useQuery(GET_QUEUE, {
    skip: !isActive,
  })

  if (loading || !data)
    return (
      <div>
        <Header title="Queue" />
        <div>No data</div>
      </div>
    )

  const currentlyPlaying = data.getQueue
    .currently_playing as CurrentlyPlayingDTO
  const queue = data.getQueue.queue as QueueItemDTO[]

  return (
    <div className="flex h-full flex-col">
      <Header title="Queue" />
      <div className="flex-1 overflow-y-scroll px-3 pt-3">
        <h2 className="font-bold">Now playing</h2>
        {currentlyPlaying && <Track track={currentlyPlaying} />}

        <h2 className="mt-4 font-bold">Next</h2>
        {queue.map((track, index) => (
          <Track key={`${track.id}-${index}`} track={track} />
        ))}
      </div>
    </div>
  )
}

export default Queue
