'use client'

import { useSidebarStore } from '@/lib/stores/sidebar.store'
import NowPlaying from './_components/NowPlaying'
import Queue from './_components/Queue'
import Device from './_components/Device'

const SideBarPage = () => {
  const { activeComponent } = useSidebarStore()

  const authenticated = true

  if (!activeComponent || !authenticated) return null
  return (
    <div className="h-full rounded-lg bg-gray-700">
      {activeComponent === 'NowPlaying' && <NowPlaying />}
      {activeComponent === 'Queue' && <Queue />}
      {activeComponent === 'Device' && <Device />}
    </div>
  )
}

export default SideBarPage
