import { PreloadQuery } from '@/lib/graphql/apollo-client'
import { GET_SEARCH_RESULTS } from '@/lib/queries/search.query'
import { Suspense, lazy } from 'react'

const ResultContainer = lazy(() => import('./_components/ResultContainer'))

interface SearchResultPageProps {
  params: Promise<{ query: string }>
}

const SearchResultPage = async ({ params }: SearchResultPageProps) => {
  const { query } = await params

  return (
    <div className="mb-20 h-full overflow-y-scroll px-5 pb-20">
      <PreloadQuery query={GET_SEARCH_RESULTS} variables={{ query }}>
        <Suspense fallback={<div>Loading...</div>}>
          <ResultContainer query={query} />
        </Suspense>
      </PreloadQuery>
    </div>
  )
}

export default SearchResultPage
