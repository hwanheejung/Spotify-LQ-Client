import { Lyrics } from '@/types/player.types'

const Lyrics = ({ data }: Pick<Lyrics, 'data'>) => {
  return (
    <div className="h-full overflow-y-scroll px-10 py-20 scrollbar-hide">
      <p className="whitespace-pre-line text-lg font-bold text-gray-100 filter">
        {data.plainLyrics}
      </p>
      <span className="block pt-10 text-sm text-gray-200">
        Lyrics provided by LRCLIB
      </span>
    </div>
  )
}

export default Lyrics
