'use client'

import { useLayoutStore } from '@/lib/stores/layout.store'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { useQuery } from '@apollo/client'
import { GET_QUEUE } from '@/lib/queries/player.query'
import { useEffect } from 'react'
import Queue from './_components/Queue'
import NowPlaying from './_components/NowPlaying'
import Device from './_components/Device'

const SideBarPage = () => {
  const { rightPanelState } = useLayoutStore()

  const { isActive, currentTrack } = usePlaybackStore()
  const { data, loading, refetch } = useQuery(GET_QUEUE, {
    skip: !isActive,
  })

  useEffect(() => {
    if (
      currentTrack &&
      data?.getQueue?.currently_playing?.id !== currentTrack.id
    )
      refetch()
  }, [currentTrack, data, refetch])

  if (!rightPanelState) return null

  return (
    <div className="h-full rounded-lg bg-gray-700 scrollbar-hide">
      <div>
        {rightPanelState === 'NOW_PLAYING' && (
          <NowPlaying
            track={data?.getQueue?.currently_playing}
            loading={loading}
          />
        )}
      </div>

      {rightPanelState === 'QUEUE' && (
        <Queue
          currentlyPlaying={data?.getQueue?.currently_playing}
          queue={data?.getQueue?.queue}
          loading={loading}
        />
      )}

      <div>{rightPanelState === 'DEVICE' && <Device />}</div>
    </div>
  )
}

export default SideBarPage
