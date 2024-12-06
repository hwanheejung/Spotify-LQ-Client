'use client'

import { GET_ALBUM } from '@/lib/queries/albums.query'
import { AlbumDTO, AlbumTrackDTO } from '@/types/albums.types'
import { useSuspenseQuery } from '@apollo/client'
import TrackItem from './TrackItem'

const Tracks = ({ albumId }: { albumId: string }) => {
  const { data } = useSuspenseQuery<{ album: AlbumDTO }>(GET_ALBUM, {
    variables: { albumId },
  })
  const { tracks } = data.album
  return (
    <>
      {tracks.map((track: AlbumTrackDTO) => (
        <TrackItem key={track.id} track={track} albumId={albumId} />
      ))}
    </>
  )
}

export default Tracks
