'use client'

import { GET_QUEUE } from '@/lib/queries/player.query'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { useQuery } from '@apollo/client'
import { useEffect, useMemo } from 'react'
import NowPlaying from './_components/NowPlaying'
import Queue from './_components/Queue'
import Device from './_components/Device'

const SidebarPage = () => {
  const { rightPanelState } = useLayoutStore()
  const { isActive, currentTrack } = usePlaybackStore()

  const { data, loading, refetch } = useQuery(GET_QUEUE, {
    skip: !isActive,
  })

  const currentlyPlaying = useMemo(() => data?.player?.currentTrack, [data])
  const queue = useMemo(() => data?.player?.queue, [data])

  useEffect(() => {
    if (currentTrack && currentlyPlaying?.id !== currentTrack.id) refetch()
  }, [currentTrack, currentlyPlaying, refetch])

  if (!rightPanelState) return null

  const renderContent = () => {
    switch (rightPanelState) {
      case 'NOW_PLAYING':
        return <NowPlaying track={currentlyPlaying} loading={loading} />
      case 'QUEUE':
        return (
          <Queue
            currentlyPlaying={currentlyPlaying}
            queue={queue}
            loading={loading}
          />
        )
      case 'DEVICE':
        return <Device />
      default:
        return null
    }
  }

  return (
    <div className="h-full rounded-lg bg-gray-700 scrollbar-hide">
      {renderContent()}
    </div>
  )
}

export default SidebarPage
