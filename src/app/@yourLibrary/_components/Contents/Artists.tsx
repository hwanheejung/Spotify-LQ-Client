'use client'

import { FlatList } from '@/components/flatlist'
import { GET_ALBUMS_ARTISTS } from '@/lib/queries/albums.query'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { ArtistDTO } from '@/types/artists.types'
import { useSuspenseQuery } from '@apollo/client'
import { ComponentType } from 'react'
import { IViewAs, useMenu } from '../MenuContext'
import {
  ArtistCollapsedView,
  ArtistCompactView,
  ArtistGridView,
  ArtistListView,
} from './ArtistItems'

const viewComponents: Record<
  IViewAs | 'COLLAPSED',
  ComponentType<{ artist: ArtistDTO }>
> = {
  COLLAPSED: ArtistCollapsedView,
  LIST: ArtistListView,
  COMPACT: ArtistCompactView,
  GRID: ArtistGridView,
}

const Artists = () => {
  const { filter, viewAs } = useMenu()
  const leftPanelState = useLayoutStore((state) => state.leftPanelState)
  const { data } = useSuspenseQuery<{ savedArtists: ArtistDTO[] }>(
    GET_ALBUMS_ARTISTS,
  )

  if (filter !== 'ARTIST') return null

  const renderItem = (artist: ArtistDTO) => {
    const ViewComponent =
      leftPanelState === 'COLLAPSED'
        ? viewComponents.COLLAPSED
        : viewComponents[viewAs]

    return <ViewComponent artist={artist} />
  }

  return (
    <FlatList
      data={data.savedArtists}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      className="overflow-y-scroll scrollbar-hide"
    />
  )
}

export default Artists
