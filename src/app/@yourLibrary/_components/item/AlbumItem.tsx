'use client'

import { useYourLibraryStore } from '@/lib/stores/useYourLibraryStore'
import { capitalizeFirstLetter } from '@/lib/utils/capitalizeFirstLetter'
import { getTimeAgo } from '@/lib/utils/getTimeAgo'
import { AlbumItemDTO } from '@/types/albums'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export const DateAdded = ({ added_at }: Pick<AlbumItemDTO, 'added_at'>) => {
  const { isOpen } = useYourLibraryStore()
  return (
    <div className={`text-xs text-gray-200 ${!isOpen && 'hidden'}`}>
      {getTimeAgo(added_at)}
    </div>
  )
}

export const Album = ({ album }: Pick<AlbumItemDTO, 'album'>) => {
  const { isOpen } = useYourLibraryStore()

  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-md">
      <Image
        src={album.images[0].url}
        alt="Album Cover"
        width={56}
        height={56}
        className="rounded-sm"
      />
      <div>
        <div
          className={`${isOpen ? 'w-[300px]' : 'w-[250px]'} overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {album.name}
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-200">
          <div>{capitalizeFirstLetter(album.type)}</div>
          <div className="h-[3px] w-[3px] rounded-full bg-gray-200" />
          <div>{album.artists[0].name}</div>
        </div>
      </div>
    </div>
  )
}

const AlbumContainer = ({
  children,
  key,
  id,
}: {
  children: ReactNode
  key: string
  id: string
}) => {
  return (
    <Link
      href={`/album/${id}`}
      key={key}
      className="flex items-center justify-between gap-5 px-3 py-3 hover:bg-gray-300"
    >
      {children}
    </Link>
  )
}

export default AlbumContainer
