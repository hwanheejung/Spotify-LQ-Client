'use client'

import { GET_ALBUM } from '@/lib/queries/albums.query'
import { AlbumDTO, AlbumTrackDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import TrackItem from './TrackItem'

const Tracks = ({ albumId }: { albumId: string }) => {
  const { data } = useSuspenseQuery<{ getAlbum: AlbumDTO }>(GET_ALBUM, {
    variables: { albumId },
  })
  const { tracks } = data.getAlbum
  return (
    <>
      {tracks.items.map((track: AlbumTrackDTO) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </>
  )
}

export default Tracks
