import { CurrentlyPlayingDTO } from '@/types/player'
import Image from 'next/image'
import Link from 'next/link'

interface CurrentTrackProps {
  track: CurrentlyPlayingDTO
}

const CurrentTrack = ({ track }: CurrentTrackProps) => {
  return (
    <div>
      <Image
        src={track.album.images[0].url}
        alt={track.name}
        width={300}
        height={300}
      />
      <p className="pt-2 text-xl font-bold">{track.name}</p>
      <Link
        href={`/artist/${track.artists[0].id}`}
        className="cursor-pointer text-gray-200 hover:text-gray-0 hover:underline"
      >
        {track.artists[0].name}
      </Link>
    </div>
  )
}

export default CurrentTrack
