import { MotionStyle } from 'framer-motion'
import { create } from 'zustand'

interface MenuState {
  isOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
  triggerRef?: React.RefObject<HTMLElement>
  menuRef?: React.RefObject<HTMLDivElement>
  setTriggerRef: (ref: React.RefObject<HTMLElement>) => void
  setMenuRef: (ref: React.RefObject<HTMLDivElement>) => void
  styles?: MotionStyle
  setStyles: (styles: MotionStyle) => void
}

export const useMenuStore = create<MenuState>((set) => {
  return {
    isOpen: false,
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    closeMenu: () => set({ isOpen: false }),
    triggerRef: undefined,
    menuRef: undefined,
    setTriggerRef: (ref) => set({ triggerRef: ref }),
    setMenuRef: (ref) => set({ menuRef: ref }),
    styles: {},
    setStyles: (styles) => set({ styles }),
  }
})
