'use client'

import { useSidebarStore } from '@/lib/stores/useSidebarStore'
import NowPlaying from './_components/NowPlaying'
import Queue from './_components/Queue'
import Device from './_components/Device'

const SideBarPage = () => {
  const { activeComponent } = useSidebarStore()
  return (
    <div>
      <div>{activeComponent === 'NowPlaying' && <NowPlaying />}</div>
      <div>{activeComponent === 'Queue' && <Queue />}</div>
      <div>{activeComponent === 'Device' && <Device />}</div>
    </div>
  )
}

export default SideBarPage
