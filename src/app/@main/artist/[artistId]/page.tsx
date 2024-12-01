import { PreloadQuery } from '@/lib/apollo/apollo-client'
import { GET_ARTIST } from '@/lib/queries/artists.query'
import { Suspense, lazy } from 'react'

const ProfileHeader = lazy(() => import('./_components/ProfileHeader'))

interface ArtistPageProps {
  params: Promise<{ artistId: string }>
}

const ArtistPage = async ({ params }: ArtistPageProps) => {
  const { artistId } = await params

  return (
    <div className="scrollbar-hide">
      <PreloadQuery query={GET_ARTIST} variables={{ artistId }}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileHeader artistId={artistId} />
        </Suspense>
      </PreloadQuery>
      <div className="h-[1000px]" />
    </div>
  )
}

export default ArtistPage
