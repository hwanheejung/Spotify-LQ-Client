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

export type AlbumDTO = {
  id: string
  name: string
  images: {
    url: string
    height: number
    width: number
  }[]
  artists: {
    name: string
  }[]
  album_type: string
  total_tracks: number
  release_date: string
  tracks: {
    total: number
    items: AlbumTrackDTO[]
  }
}
