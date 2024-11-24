import { create } from 'zustand'

type Track = {
  name: string
  album: {
    images: { url: string }[]
  }
  artists: { name: string }[]
}

export interface PlaybackState {
  /**
   * the Spotify player instance.
   */
  player?: Spotify.Player

  /**
   * the name of the player.
   */
  playerName: string

  /**
   * the current track being played.
   */
  currentTrack: Track
  /**
   * indicates whether the current track is being played or not.
   */
  isPaused: boolean
  /**
   * indicates whether the current playback has been transferred to this player or not.
   */
  isActive: boolean
  setPlayer: (player: Spotify.Player) => void
  setPlayerName: (playerName: string) => void
  setCurrentTrack: (currentTrack: Track) => void
  setIsPaused: (isPaused: boolean) => void
  setIsActive: (isActive: boolean) => void
}

export const usePlaybackStore = create<PlaybackState>((set) => ({
  player: undefined,
  playerName: 'Project',
  currentTrack: {
    name: '',
    album: {
      images: [{ url: '' }],
    },
    artists: [{ name: '' }],
  },
  isPaused: true,
  isActive: false,
  setPlayer: (player) => set({ player }),
  setPlayerName: (playerName) => set({ playerName }),
  setCurrentTrack: (currentTrack) => set({ currentTrack }),
  setIsPaused: (isPaused) => set({ isPaused }),
  setIsActive: (isActive) => set({ isActive }),
}))
