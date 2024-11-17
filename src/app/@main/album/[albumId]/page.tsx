import { getClient } from '@/lib/apollo/ApolloClient'
import { GET_ALBUM_TRACKS } from '@/lib/queries/albumQuery'
import { AlbumTrackDTO } from '@/types/albums'
import TrackItem from './_components/TrackItem'

interface AlbumPageProps {
  params: {
    albumId: string
  }
}

const AlbumPage = async ({ params }: AlbumPageProps) => {
  const { albumId } = await params
  const { data } = await getClient().query({
    query: GET_ALBUM_TRACKS,
    variables: { albumId },
  })

  return (
    <div>
      {data.getAlbumTracks.items.map((track: AlbumTrackDTO) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </div>
  )
}

export default AlbumPage
