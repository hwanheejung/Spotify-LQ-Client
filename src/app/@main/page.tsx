import { PreloadQuery } from '@/lib/graphql/apollo-client'
import { GET_NEW_RELEASES } from '@/lib/queries/albums.query'
import { Suspense } from 'react'
import NewReleases from './_components/NewReleases'
import NewReleasesSkeleton from './_components/NewReleases.skeleton'

export default function Home() {
  return (
    <div className="h-full overflow-y-scroll rounded-lg bg-gray-700 scrollbar-hide">
      <PreloadQuery query={GET_NEW_RELEASES} variables={{ limit: 5 }}>
        <Suspense fallback={<NewReleasesSkeleton />}>
          <NewReleases />
        </Suspense>
      </PreloadQuery>
    </div>
  )
}
