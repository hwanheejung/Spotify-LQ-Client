import { getClient } from '@/lib/apollo/ApolloClient'
import { GET_SAVED_ALBUMS } from '@/lib/queries/albumQuery'
import { AlbumItemDTO } from '@/types/albums'
import AlbumContainer, { Album, DateAdded } from './item/AlbumItem'

const Contents = async () => {
  const { data } = await getClient().query({
    query: GET_SAVED_ALBUMS,
    variables: { offset: 0, limit: 20 },
  })

  return (
    <div className="overflow-hidden text-gray-0">
      <div className="flex flex-col overflow-y-scroll">
        {data.getSavedAlbums.items.map((item: AlbumItemDTO) => (
          <AlbumContainer key={item.album.id} id={item.album.id}>
            <Album album={item.album} />
            <DateAdded added_at={item.added_at} />
          </AlbumContainer>
        ))}
      </div>
    </div>
  )
}

export default Contents
