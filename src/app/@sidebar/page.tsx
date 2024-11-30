'use client'

import { useLayoutStore } from '@/lib/stores/layout.store'
import Device from './_components/Device'
import NowPlaying from './_components/NowPlaying'
import Queue from './_components/Queue'

const SideBarPage = () => {
  const { rightPanelState } = useLayoutStore()

  const authenticated = true

  if (!rightPanelState || !authenticated) return null
  return (
    <div className="h-full rounded-lg bg-gray-700">
      <div>{rightPanelState === 'NOW_PLAYING' && <NowPlaying />}</div>
      <div>{rightPanelState === 'QUEUE' && <Queue />}</div>
      <div>{rightPanelState === 'DEVICE' && <Device />}</div>
    </div>
  )
}

export default SideBarPage
