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
