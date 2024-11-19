import { getClient } from '@/lib/apollo/ApolloClient'
import { GET_ALBUM } from '@/lib/queries/albumsQuery'
import { AlbumDTO, AlbumTrackDTO } from '@/types/albums'
import TrackItem from './_components/TrackItem'
import AlbumOverview from './_components/AlbumOverview'

interface AlbumPageProps {
  params: {
    albumId: string
  }
}

const AlbumPage = async ({ params }: AlbumPageProps) => {
  const { albumId } = await params
  const { data } = await getClient().query({
    query: GET_ALBUM,
    variables: { albumId },
  })

  const album = data.getAlbum as AlbumDTO

  return (
    <div>
      <AlbumOverview
        name={album.name}
        images={album.images}
        artists={album.artists}
        album_type={album.album_type}
        total_tracks={album.total_tracks}
        release_date={album.release_date}
      />
      {album.tracks.items.map((track: AlbumTrackDTO) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </div>
  )
}

export default AlbumPage
