import { Section } from '@/components/section'

export type Album = {
  id: string
  name: string
  album_type: string
  release_date: string
  images: {
    url: string
    height: number
    width: number
  }[]
  artists: {
    id: string
    name: string
  }[]
}

const Albums = ({ albums }: { albums: Album[] }) => {
  console.log(albums)
  return (
    <Section title="Albums" hasLink href="/">
      <div>Albums</div>
      <div>Albums</div>
      <div>Albums</div>
    </Section>
  )
}

export default Albums
