'use client'

import { ArtistDTO } from '@/types/artists.types'
import { useSuspenseQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { GET_ALBUMS_ARTISTS } from '@/lib/queries/albums.query'
import { useMenu } from '../MenuContext'

const Artists = () => {
  const { filter } = useMenu()
  const { data } = useSuspenseQuery<{ savedArtists: ArtistDTO[] }>(
    GET_ALBUMS_ARTISTS,
  )

  if (filter !== 'ARTIST') return null
  return (
    <div className="flex cursor-pointer flex-col overflow-y-scroll scrollbar-hide">
      {data.savedArtists.map((artist: ArtistDTO) => (
        <Link
          href={`/artist/${artist.id}`}
          key={artist.id}
          className="flex items-center gap-4 px-3 py-3 hover:bg-gray-500"
        >
          <Image
            src={artist.images[0].url}
            alt={artist.name}
            className="aspect-square rounded-full object-cover"
            width={56}
            height={56}
          />
          <p>{artist.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Artists
