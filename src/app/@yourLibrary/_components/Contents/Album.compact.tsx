import { useLayoutStore } from '@/lib/stores/layout.store'
import { getTimeAgo } from '@/lib/utils/get-time-ago'
import { AlbumItemDTO } from '@/types/albums.types'
import Link from 'next/link'

const AlbumCompactView = ({
  item: { album, added_at },
}: {
  item: AlbumItemDTO
}) => {
  const leftPanelState = useLayoutStore((state) => state.leftPanelState)

  return (
    <Link
      key={album.id}
      href={`/album/${album.id}`}
      className="flex items-center justify-between gap-5 px-3 py-1 hover:bg-gray-500"
    >
      <div className="block w-[90%] flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {album.name}
      </div>
      <div
        className={`flex-shrink-0 text-xs text-gray-200 ${leftPanelState !== 'EXPANDED' && 'hidden'}`}
      >
        {getTimeAgo(added_at)}
      </div>
    </Link>
  )
}

export default AlbumCompactView
