import { AlbumItemDTO } from '@/types/albums.types'
import Image from 'next/image'
import Link from 'next/link'

const AlbumCollapsedView = ({ albums }: { albums: AlbumItemDTO[] }) => {
  return (
    <div className="overflow-y-scroll scrollbar-hide">
      {albums.map(({ album }: AlbumItemDTO) => (
        <Link
          key={album.id}
          href={`/album/${album.id}`}
          className="flex items-center justify-center p-3 hover:bg-gray-500"
        >
          <Image
            src={album.images[0].url}
            alt="Album Cover"
            width={56}
            height={56}
            className="aspect-square rounded-sm object-cover"
            style={{
              width: '100%',
            }}
          />
        </Link>
      ))}
    </div>
  )
}

export default AlbumCollapsedView
