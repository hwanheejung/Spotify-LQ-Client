'use client'

import { GET_ALBUMS_ARTISTS } from '@/lib/queries/albums.query'
import { AlbumItemDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { useMenu } from '../MenuContext'
import AlbumListView from './Album.list'
import AlbumCompactView from './Album.compact'
import AlbumGridView from './Album.grid'
import AlbumCollapsedView from './Album.collapsed'

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
  if (leftPanelState === 'COLLAPSED')
    return <AlbumCollapsedView albums={data.savedAlbums} />
  if (viewAs === 'LIST') return <AlbumListView albums={data.savedAlbums} />
  if (viewAs === 'GRID') return <AlbumGridView albums={data.savedAlbums} />
  if (viewAs === 'COMPACT')
    return <AlbumCompactView albums={data.savedAlbums} />

  return null
}

export default Albums
