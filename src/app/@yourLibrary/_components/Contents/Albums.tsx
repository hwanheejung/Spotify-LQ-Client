'use client'

import { GET_ALBUMS_ARTISTS } from '@/lib/queries/albums.query'
import { AlbumItemDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { ReactNode } from 'react'
import { useMenu } from '../MenuContext'
import AlbumListView from './Album.list'
import AlbumCompactView from './Album.compact'
import AlbumGridView from './Album.grid'
import AlbumCollapsedView from './Album.collapsed'

interface FlatListProps<T> {
  data: T[]
  renderItem: (item: T, index: number) => ReactNode
  keyExtractor: (item: T, index: number) => string | number
  className?: string
}

const FlatList = <T,>({
  data,
  renderItem,
  keyExtractor,
  className,
}: FlatListProps<T>) => {
  return (
    <div className={className}>
      {data.map((item, index) => (
        <div key={keyExtractor(item, index)}>{renderItem(item, index)}</div>
      ))}
    </div>
  )
}

const Albums = () => {
  const { filter, viewAs } = useMenu()
  const leftPanelState = useLayoutStore((state) => state.leftPanelState)
  const { data } = useSuspenseQuery<{ savedAlbums: AlbumItemDTO[] }>(
    GET_ALBUMS_ARTISTS,
    {
      variables: { offset: 0, limit: 20 },
    },
  )
  if (filter !== 'ALBUM') return null

  const renderItem = (item: AlbumItemDTO) => {
    if (leftPanelState === 'COLLAPSED')
      return <AlbumCollapsedView album={item.album} />

    switch (viewAs) {
      case 'LIST':
        return <AlbumListView item={item} />
      case 'COMPACT':
        return <AlbumCompactView item={item} />
      case 'GRID':
        return <AlbumGridView album={item.album} />
      default:
        return null
    }
  }

  return (
    <FlatList
      data={data.savedAlbums}
      renderItem={renderItem}
      keyExtractor={(item) => item.album.id}
      className="overflow-y-scroll scrollbar-hide"
    />
  )
}

export default Albums
