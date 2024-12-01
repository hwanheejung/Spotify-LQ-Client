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

export type CurrentlyPlayingDTO = Track
export type QueueItemDTO = Track
