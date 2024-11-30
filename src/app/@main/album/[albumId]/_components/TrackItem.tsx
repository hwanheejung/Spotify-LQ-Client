'use client'

import { START_PLAYBACK } from '@/lib/queries/player.query'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { formatDuration } from '@/lib/utils/format-duration'
import { AlbumTrackDTO } from '@/types/albums'
import { useMutation } from '@apollo/client'
import { HiMiniPlay } from 'react-icons/hi2'

interface TrackItemProps {
  track: AlbumTrackDTO
}

const TrackItem = ({ track }: TrackItemProps) => {
  const { deviceId, currentTrack } = usePlaybackStore()
  const [startResumePlayback] = useMutation(START_PLAYBACK)

  const handleStart = async () => {
    try {
      await startResumePlayback({
        variables: {
          deviceId,
          type: 'track',
          ids: [track.id],
        },
      })
    } catch (err) {
      console.error('Failed to start playback', err)
    }
  }

  return (
    <div
      key={track.id}
      className="group flex items-center rounded-sm pr-5 text-gray-100 hover:bg-gray-500"
    >
      <div className="mx-3 flex h-5 w-5 items-center justify-center">
        <p
          className={`group-hover:hidden ${currentTrack?.id === track.id ? 'text-spotifyGreen' : 'text-gray-0'}`}
        >
          {track.track_number}
        </p>
        <button className="hidden group-hover:block" onClick={handleStart}>
          <HiMiniPlay className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 py-1 pl-2">
        <h2
          className={`font-semibold ${currentTrack?.id === track.id ? 'text-spotifyGreen' : 'text-gray-0'}`}
        >
          {track.name}
        </h2>
        <p className="text-sm">
          {track.artists.map((artist) => artist.name).join(', ')}
        </p>
      </div>
      <p className="text-xs">{formatDuration(track.duration_ms)}</p>
    </div>
  )
}

export default TrackItem
