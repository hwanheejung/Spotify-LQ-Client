import { CurrentlyPlayingDTO, QueueItemDTO } from '@/types/player'
import Image from 'next/image'
import Link from 'next/link'

interface TrackProps {
  track: QueueItemDTO | CurrentlyPlayingDTO
}

const Track = ({ track }: TrackProps) => (
  <div className="flex items-center gap-3 py-3">
    <Image
      src={track.album.images[0].url}
      alt={track.name}
      width={50}
      height={50}
      className="rounded-sm"
    />
    <div>
      <p className="w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
        {track.name}
      </p>
      <Link
        href={`/artist/${track.artists[0].id}`}
        className="cursor-pointer text-xs text-gray-200 hover:text-gray-0 hover:underline"
      >
        {track.artists[0].name}
      </Link>
    </div>
  </div>
)

export default Track
