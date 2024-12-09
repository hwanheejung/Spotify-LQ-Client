import { capitalizeFirstLetter } from '@/lib/utils/capitalize-first-letter'
import { AlbumItemDTO } from '@/types/albums.types'
import Image from 'next/image'
import Link from 'next/link'

const AlbumGridView = ({ albums }: { albums: AlbumItemDTO[] }) => {
  return (
    <div className="overflow-y-scroll scrollbar-hide">
      {albums.map(({ album }: Pick<AlbumItemDTO, 'album'>) => (
        <Link
          key={album.id}
          href={`/album/${album.id}`}
          className="flex flex-col gap-3 p-3 hover:bg-gray-500"
        >
          <Image
            src={album.images[0].url}
            alt="Album Cover"
            width={100}
            height={100}
            className="aspect-square rounded-md object-cover"
            style={{
              width: '100%',
            }}
          />
          <div className="overflow-hidden">
            <div className="block w-[90%] flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {album.name}
            </div>
            <div className="block items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-200">
              {capitalizeFirstLetter(album.type)} • {album.artists[0].name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AlbumGridView
