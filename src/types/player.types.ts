export type DeviceDTO = {
  id: string
  name: string
  type: 'Computer' | 'Smartphone' | 'Speaker'
  is_active: boolean
  volume_percent: number
}

type Track = {
  id: string
  name: string
  album: {
    id: string
    name: string
    images: {
      url: string
    }[]
  }
  artists: {
    id: string
    name: string
  }[]
}

export type Lyrics = {
  available: boolean
  locked: boolean
  data: {
    id: string
    plainLyrics: string
    syncedLyrics: string
  }
}

export type CurrentlyPlayingDTO = Track & {
  lyrics: Lyrics
}
export type QueueItemDTO = Track
