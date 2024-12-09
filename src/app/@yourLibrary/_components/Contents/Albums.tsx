'use client'

import { FlatList } from '@/components/flatlist'
import { GET_ALBUMS_ARTISTS } from '@/lib/queries/albums.query'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { AlbumItemDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import { useMenu } from '../MenuContext'
import {
  AlbumCollapsedView,
  AlbumCompactView,
  AlbumGridView,
  AlbumListView,
} from './AlbumItems'

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
