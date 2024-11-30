import { CurrentlyPlayingDTO, QueueItemDTO } from '@/types/player'
import Header from '../Header'
import Track from './Track'
import TrackSkeleton from './Track.skeleton'

interface QueueProps {
  currentlyPlaying?: CurrentlyPlayingDTO
  queue?: QueueItemDTO[]
  loading: boolean
}

const Queue = ({ currentlyPlaying, queue, loading }: QueueProps) => {
  if (loading || !currentlyPlaying || !queue)
    return (
      <div>
        <Header title="Queue" />
        <div className="flex-1 px-3 pt-3">
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
        </div>
      </div>
    )

  return (
    <div className="flex h-full flex-col">
      <Header title="Queue" />
      <div className="flex-1 overflow-y-scroll px-3 pb-10 pt-3 scrollbar-hide">
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
