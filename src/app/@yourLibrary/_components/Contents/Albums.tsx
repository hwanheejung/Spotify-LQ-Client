'use client'

import { useLayoutStore } from '@/lib/stores/layout.store'
import { capitalizeFirstLetter } from '@/lib/utils/capitalize-first-letter'
import { getTimeAgo } from '@/lib/utils/get-time-ago'
import { AlbumItemDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { GET_ALBUMS_ARTISTS } from '@/lib/queries/albums.query'
import { useMenu } from '../MenuContext'

const DateAdded = ({ added_at }: Pick<AlbumItemDTO, 'added_at'>) => {
  const leftPanelState = useLayoutStore((state) => state.leftPanelState)
  return (
    <div
      className={`flex-shrink-0 text-xs text-gray-200 ${leftPanelState !== 'EXPANDED' && 'hidden'}`}
    >
      {getTimeAgo(added_at)}
    </div>
  )
}

const AlbumItem = ({ album }: Pick<AlbumItemDTO, 'album'>) => {
  const leftPanelState = useLayoutStore((state) => state.leftPanelState)

  return (
    <div className="flex flex-1 cursor-pointer items-center gap-4 overflow-hidden">
      <Image
        src={album.images[0].url}
        alt="Album Cover"
        width={56}
        height={56}
        style={{
          width: leftPanelState === 'COLLAPSED' ? '100%' : '56px',
          height: leftPanelState === 'COLLAPSED' ? 'auto' : '56px',
        }}
        className="rounded-sm"
      />
      {leftPanelState !== 'COLLAPSED' && (
        <div className="flex-1 overflow-hidden">
          <div className="block w-[90%] flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {album.name}
          </div>
          <div className="block items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-200">
            {capitalizeFirstLetter(album.type)} • {album.artists[0].name}
          </div>
        </div>
      )}
    </div>
  )
}

const Albums = () => {
  const { filter } = useMenu()
  const { data } = useSuspenseQuery<{ savedAlbums: AlbumItemDTO[] }>(
    GET_ALBUMS_ARTISTS,
    {
      variables: { offset: 0, limit: 20 },
    },
  )

  if (filter !== 'ALBUM') return null
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar-hide">
      {data.savedAlbums.map((item: AlbumItemDTO) => (
        <Link
          key={item.album.id}
          href={`/album/${item.album.id}`}
          className="flex items-center justify-between gap-5 px-3 py-3 hover:bg-gray-500"
        >
          <AlbumItem album={item.album} />
          <DateAdded added_at={item.added_at} />
        </Link>
      ))}
    </div>
  )
}

export default Albums
