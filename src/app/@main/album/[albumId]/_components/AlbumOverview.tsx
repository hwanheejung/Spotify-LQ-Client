import { capitalizeFirstLetter } from '@/lib/utils/capitalizeFirstLetter'
import { parseDate } from '@/lib/utils/parseDate'
import { AlbumDTO } from '@/types/albums'
import Image from 'next/image'

const AlbumOverview = ({
  name,
  images,
  artists,
  album_type,
  total_tracks,
  release_date,
}: Pick<
  AlbumDTO,
  'name' | 'images' | 'artists' | 'album_type' | 'total_tracks' | 'release_date'
>) => {
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
            <span className="font-bold text-gray-0">
              {artists.map((artist) => artist.name).join(', ')}
            </span>{' '}
            • {year} • {total_tracks} songs
          </p>
        </div>
      </div>
    </div>
  )
}

export default AlbumOverview
