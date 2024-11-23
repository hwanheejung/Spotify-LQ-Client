import { formatDuration } from '@/lib/utils/format-duration'
import { AlbumTrackDTO } from '@/types/albums'

interface TrackItemProps {
  track: AlbumTrackDTO
}

const TrackItem = ({ track }: TrackItemProps) => {
  return (
    <div
      key={track.id}
      className="flex items-center rounded-sm pr-5 text-gray-100 hover:bg-gray-500"
    >
      <p className="px-6 py-5">{track.track_number}</p>
      <div className="flex-1">
        <h2 className="font-semibold text-gray-0">{track.name}</h2>
        <p className="text-sm">
          {track.artists.map((artist) => artist.name).join(', ')}
        </p>
      </div>
      <p className="text-sm">{formatDuration(track.duration_ms)}</p>
    </div>
  )
}

export default TrackItem
