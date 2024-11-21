'use client'

import { GET_ALBUM } from '@/lib/queries/albumsQuery'
import { capitalizeFirstLetter } from '@/lib/utils/capitalizeFirstLetter'
import { parseDate } from '@/lib/utils/parseDate'
import { AlbumDTO } from '@/types/albums'
import { useSuspenseQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'

const AlbumOverview = ({ albumId }: { albumId: string }) => {
  const { data } = useSuspenseQuery<{ getAlbum: AlbumDTO }>(GET_ALBUM, {
    variables: { albumId },
  })
  const { name, images, artists, album_type, total_tracks, release_date } =
    data.getAlbum
  const { year } = parseDate(release_date)

  return (
    <div className="px-5 pb-7 pt-10">
      <div className="flex items-end gap-5">
        <Image
          src={images[0].url}
          alt="Album Cover"
          width={150}
          height={150}
          className="rounded-sm"
        />
        <div>
          <p className="text-sm">{capitalizeFirstLetter(album_type)}</p>
          <h1 className="text-4xl font-extrabold">{name}</h1>
          <p className="text-xs text-gray-200">
            {artists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artist/${artist.id}`}
                className="font-bold text-gray-0 hover:underline"
              >
                {artist.name}
              </Link>
            ))}
            • {year} • {total_tracks} songs
          </p>
        </div>
      </div>
    </div>
  )
}

export default AlbumOverview
