import { Section } from '@/components/section'

export type Artist = {
  id: string
  name: string
  type: string
}

const Artists = ({ artists }: { artists: Artist[] }) => {
  console.log(artists)
  return (
    <Section title="Artists" hasLink href="/">
      <div>artist</div>
      <div>artist</div>
      <div>artist</div>
    </Section>
  )
}

export default Artists
