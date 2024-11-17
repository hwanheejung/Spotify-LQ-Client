import { getClient } from '@/lib/apollo/ApolloClient'
import { GET_SAVED_ALBUMS } from '@/lib/queries/albumQuery'
import { capitalizeFirstLetter } from '@/lib/utils/capitalizeFirstLetter'
import { AlbumItem } from '@/types/albums'
import Image from 'next/image'

const Albums = async () => {
  const { data } = await getClient().query({
    query: GET_SAVED_ALBUMS,
    variables: { offset: 0, limit: 20 },
  })

  return (
    <div className="overflow-hidden text-gray-0">
      <div className="flex flex-col overflow-y-scroll">
        {data.getSavedAlbums.items.map((albumItem: AlbumItem) => (
          <div
            key={albumItem.album.id}
            className="flex w-full items-center gap-4 px-3 py-2"
          >
            <Image
              src={albumItem.album.images[0].url}
              alt="Album Cover"
              width={56}
              height={56}
              className="rounded-md"
            />
            <div>
              <div className="w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                {albumItem.album.name}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-200">
                <div>{capitalizeFirstLetter(albumItem.album.type)}</div>
                <div className="h-[3px] w-[3px] rounded-full bg-gray-200" />
                <div>{albumItem.album.artists[0].name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Albums
