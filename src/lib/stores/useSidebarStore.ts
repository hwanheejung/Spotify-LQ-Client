import { Sidebar } from '@/types/sidebar'
import { create } from 'zustand'

interface SidebarState {
  activeComponent: Sidebar
  setActiveComponent: (component: Sidebar) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  activeComponent: 'NowPlaying',
  setActiveComponent: (component) => set({ activeComponent: component }),
}))
