import { usePlaybackStore } from '@/lib/stores/playback.store'
import Image from 'next/image'

const CurrentTrack = () => {
  const { currentTrack } = usePlaybackStore()
  if (!currentTrack) return <div />

  return (
    <div className="flex items-center gap-3">
      <Image
        src={currentTrack.album.images[0].url}
        width={50}
        height={50}
        alt=""
      />
      <div>
        <p className="text-xs">{currentTrack.name}</p>
        <p className="text-xxs text-gray-200">{currentTrack.artists[0].name}</p>
      </div>
    </div>
  )
}

export default CurrentTrack
