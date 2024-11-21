import { PreloadQuery } from '@/lib/apollo/ApolloClient'
import { GET_ALBUM } from '@/lib/queries/albumsQuery'
import { Suspense, lazy } from 'react'

const AlbumOverview = lazy(() => import('./_components/AlbumOverview'))
const Tracks = lazy(() => import('./_components/Tracks'))

interface AlbumPageProps {
  params: {
    albumId: string
  }
}

const AlbumPage = async ({ params }: AlbumPageProps) => {
  const { albumId } = await params

  return (
    <div>
      <PreloadQuery query={GET_ALBUM} variables={{ albumId }}>
        <Suspense fallback={<div>Loading...</div>}>
          <AlbumOverview albumId={albumId} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Tracks albumId={albumId} />
        </Suspense>
      </PreloadQuery>
    </div>
  )
}

export default AlbumPage
