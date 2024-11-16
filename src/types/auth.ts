export type User = {
  email: string
  display_name: string
  images: Array<{
    height: number
    url: string
    width: number
  }>
  product: 'premium'
  country: 'KR'
}
