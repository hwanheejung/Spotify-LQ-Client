'use client'

import { useSidebarStore } from '@/lib/stores/useSidebarStore'

const SidebarNav = () => {
  const { setActiveComponent } = useSidebarStore()

  return (
    <div className="flex">
      <button onClick={() => setActiveComponent('NowPlaying')}>
        Now Playing
      </button>
      <button onClick={() => setActiveComponent('Queue')}>Queue</button>
      <button onClick={() => setActiveComponent('Device')}>Device</button>
    </div>
  )
}

export default SidebarNav
