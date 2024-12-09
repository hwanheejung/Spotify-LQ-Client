'use client'

import { FlatList } from '@/components/flatlist'
import { GET_ALBUM } from '@/lib/queries/albums.query'
import { AlbumDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import TrackItem from './TrackItem'

const Tracks = ({ albumId }: { albumId: string }) => {
  const { data } = useSuspenseQuery<{ album: AlbumDTO }>(GET_ALBUM, {
    variables: { albumId },
  })

  return (
    <FlatList
      data={data.album.tracks}
      renderItem={(item) => <TrackItem track={item} albumId={albumId} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default Tracks
