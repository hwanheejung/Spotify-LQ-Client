import { getClient } from '@/lib/apollo/ApolloClient'
import { GET_ARTIST } from '@/lib/queries/artistsQuery'
import { ArtistDTO } from '@/types/artists'
import ProfileHeader from './_components/ProfileHeader'

interface ArtistPageProps {
  params: {
    artistId: string
  }
}

const ArtistPage = async ({ params }: ArtistPageProps) => {
  const { artistId } = await params

  const { data } = await getClient().query({
    query: GET_ARTIST,
    variables: { artistId },
  })

  const artist = data.getArtist as ArtistDTO

  return (
    <div className="scrollbar-hide">
      <ProfileHeader
        name={artist.name}
        images={artist.images}
        followers={artist.followers}
      />
      <div className="h-[1000px]" />
    </div>
  )
}

export default ArtistPage
