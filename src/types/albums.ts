export type AlbumItem = {
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
