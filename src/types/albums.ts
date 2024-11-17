export type AlbumItemDTO = {
  added_at: string
  album: {
    id: string
    images: {
      url: string
    }[]
    name: string
    type: string
    artists: {
      name: string
    }[]
  }
}

export type AlbumTrackDTO = {
  id: string
  name: string
  artists: {
    name: string
  }[]
  duration_ms: number
  track_number: number
}
