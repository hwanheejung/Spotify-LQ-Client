import { Sidebar } from '@/types/sidebar'
import { create } from 'zustand'

interface SidebarState {
  activeComponent: Sidebar
  setActiveComponent: (component: Sidebar) => void
}

type DefaultSidebar = Exclude<Sidebar, null>

export const useSidebarStore = create<SidebarState>((set) => ({
  activeComponent: 'NowPlaying' as DefaultSidebar,
  setActiveComponent: (component) => set({ activeComponent: component }),
}))
