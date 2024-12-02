'use client'

import { usePlaybackStore } from '@/lib/stores/playback.store'
import SyncedLyrics from './_components/SyncedLyrics'
import Locked from './_components/Locked'
import Lyrics from './_components/Lyrics'
import NoData from './_components/NoData'

const LyricsPage = () => {
  const lyrics = usePlaybackStore((state) => state.currentTrackLyrics)

  if (!lyrics?.available) return <NoData />
  if (lyrics.locked) return <Locked />

  return lyrics.data.syncedLyrics ? (
    <SyncedLyrics lyrics={lyrics.data.syncedLyrics} />
  ) : (
    <Lyrics lyrics={lyrics.data.plainLyrics} />
  )
}

export default LyricsPage
