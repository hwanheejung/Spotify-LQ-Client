'use client'

import { useSuspenseQuery } from '@apollo/client'
import { GET_SEARCH_RESULTS } from '@/lib/queries/search.query'
import Albums, { Album } from './Albums'
import Artists, { Artist } from './Artists'
import Songs, { Track } from './Songs'
import TopResult from './TopResult'

type SearchDTO = {
  tracks: Track[]
  albums: Album[]
  artists: Artist[]
}

const ResultContainer = ({ query }: { query: string }) => {
  const { data } = useSuspenseQuery<{ search: SearchDTO }>(GET_SEARCH_RESULTS, {
    variables: { query },
  })

  return (
    <>
      <div className="grid grid-cols-2">
        <TopResult />
        <Songs tracks={data.search.tracks} />
      </div>
      <Artists artists={data.search.artists} />
      <Albums albums={data.search.albums} />
    </>
  )
}

export default ResultContainer
