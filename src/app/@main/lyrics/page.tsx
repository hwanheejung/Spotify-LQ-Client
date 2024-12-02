'use client'

import { usePlaybackStore } from '@/lib/stores/playback.store'
import Locked from './_components/Locked'
import Lyrics from './_components/Lyrics'

const LyricsPage = () => {
  const lyrics = usePlaybackStore((state) => state.currentTrackLyrics)

  if (!lyrics?.available)
    return (
      <div className="flex h-full items-center justify-center">
        <p>No lyrics available.</p>
      </div>
    )

  return (
    <div className="h-full">
      {lyrics?.locked ? <Locked /> : <Lyrics data={lyrics.data} />}
    </div>
  )
}

export default LyricsPage
