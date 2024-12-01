import { PreloadQuery } from '@/lib/apollo/apollo-client'
import { GET_ALBUM } from '@/lib/queries/albums.query'
import { Suspense, lazy } from 'react'
import AlbumOverviewSkeleton from './_components/AlbumOverview.skeleton'
import TracksSkeleton from './_components/Tracks.skeleton'
import AlbumNav from './_components/AlbumNav'

const AlbumOverview = lazy(() => import('./_components/AlbumOverview'))
const Tracks = lazy(() => import('./_components/Tracks'))

interface AlbumPageProps {
  params: Promise<{ albumId: string }>
}

const AlbumPage = async ({ params }: AlbumPageProps) => {
  const { albumId } = await params

  return (
    <div className="h-full overflow-y-scroll scrollbar-hide">
      <PreloadQuery query={GET_ALBUM} variables={{ albumId }}>
        <Suspense fallback={<AlbumOverviewSkeleton />}>
          <AlbumOverview albumId={albumId} />
        </Suspense>
        <AlbumNav id={albumId} />
        <Suspense fallback={<TracksSkeleton />}>
          <Tracks albumId={albumId} />
        </Suspense>
      </PreloadQuery>
    </div>
  )
}

export default AlbumPage
