'use client'

import { useLayoutStore } from '@/lib/stores/layout.store'
import { capitalizeFirstLetter } from '@/lib/utils/capitalize-first-letter'
import { getTimeAgo } from '@/lib/utils/get-time-ago'
import { AlbumItemDTO } from '@/types/albums'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export const DateAdded = ({ added_at }: Pick<AlbumItemDTO, 'added_at'>) => {
  const { leftPanelState } = useLayoutStore()
  return (
    <div
      className={`flex-shrink-0 text-xs text-gray-200 ${leftPanelState === 'DEFAULT' && 'hidden'}`}
    >
      {getTimeAgo(added_at)}
    </div>
  )
}

export const Album = ({ album }: Pick<AlbumItemDTO, 'album'>) => {
  return (
    <div className="flex flex-1 cursor-pointer items-center gap-4 overflow-hidden rounded-md">
      <Image
        src={album.images[0].url}
        alt="Album Cover"
        width={56}
        height={56}
        className="rounded-sm"
      />
      <div className="flex-1 overflow-hidden">
        <div className="block w-[90%] flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {album.name}
        </div>
        <div className="block items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-200">
          {capitalizeFirstLetter(album.type)} • {album.artists[0].name}
        </div>
      </div>
    </div>
  )
}

const AlbumContainer = ({
  children,
  id,
}: {
  children: ReactNode

  id: string
}) => {
  return (
    <Link
      href={`/album/${id}`}
      className="flex items-center justify-between gap-5 px-3 py-3 hover:bg-gray-500"
    >
      {children}
    </Link>
  )
}

export default AlbumContainer
