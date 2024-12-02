'use client'

import { GET_QUEUE } from '@/lib/queries/player.query'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import NowPlaying from './_components/NowPlaying'
import Queue from './_components/Queue'
import Device from './_components/Device'

const SidebarPage = () => {
  const { rightPanelState } = useLayoutStore()

  const { isActive, currentTrack, setCurrentTrackLyrics } = usePlaybackStore()
  const { data, loading, refetch } = useQuery(GET_QUEUE, {
    skip: !isActive,
  })

  useEffect(() => {
    if (
      currentTrack &&
      data?.getQueue?.currently_playing?.id !== currentTrack.id
    )
      refetch()

    setCurrentTrackLyrics(data?.getQueue?.currently_playing?.lyrics)
  }, [currentTrack, data, refetch])

  if (!rightPanelState) return null

  return (
    <div className="h-full rounded-lg bg-gray-700 scrollbar-hide">
      {rightPanelState === 'NOW_PLAYING' && (
        <NowPlaying
          track={data?.getQueue?.currently_playing}
          loading={loading}
        />
      )}

      {rightPanelState === 'QUEUE' && (
        <Queue
          currentlyPlaying={data?.getQueue?.currently_playing}
          queue={data?.getQueue?.queue}
          loading={loading}
        />
      )}

      {rightPanelState === 'DEVICE' && <Device />}
    </div>
  )
}

export default SidebarPage
