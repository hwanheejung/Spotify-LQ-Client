import { getClient } from '@/lib/graphql/apollo-client'
import { GET_SAVED_ALBUMS } from '@/lib/queries/albums.query'
import { AlbumItemDTO } from '@/types/albums.types'
import AlbumContainer, { Album, DateAdded } from './item/AlbumItem'

const Contents = async () => {
  const { data } = await getClient().query({
    query: GET_SAVED_ALBUMS,
    variables: { offset: 0, limit: 20 },
  })

  return (
    <div className="overflow-hidden pb-10 text-gray-0">
      <div className="flex flex-col overflow-y-scroll scrollbar-hide">
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
