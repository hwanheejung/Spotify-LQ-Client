'use client'

import { FlatList } from '@/components/flatlist'
import { GET_ALBUMS_ARTISTS } from '@/lib/queries/albums.query'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { AlbumItemDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import { ComponentType } from 'react'
import { IViewAs, useMenu } from '../MenuContext'
import {
  AlbumCollapsedView,
  AlbumCompactView,
  AlbumGridView,
  AlbumListView,
} from './AlbumItems'

const viewComponents: Record<
  IViewAs | 'COLLAPSED',
  ComponentType<{ item: AlbumItemDTO }>
> = {
  COLLAPSED: AlbumCollapsedView,
  LIST: AlbumListView,
  COMPACT: AlbumCompactView,
  GRID: AlbumGridView,
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
    const ViewComponent =
      leftPanelState === 'COLLAPSED'
        ? viewComponents.COLLAPSED
        : viewComponents[viewAs]

    return <ViewComponent item={item} />
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
