export type ArtistDTO = {
  id: string
  name: string
  images: {
    url: string
    height: number
    width: number
  }[]
  type: string
  followers: {
    href: string
    total: number
  }
  genres: string[]
}
