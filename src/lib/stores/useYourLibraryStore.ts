import { create } from 'zustand'

interface YourLibraryState {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useYourLibraryStore = create<YourLibraryState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}))
