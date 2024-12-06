import { PreloadQuery } from '@/lib/graphql/apollo-client'
import { GET_SEARCH_RESULTS } from '@/lib/queries/search.query'
import { Suspense } from 'react'
import ResultContainer from './_components/ResultContainer'

interface SearchResultPageProps {
  params: Promise<{ query: string }>
}

const SearchResultPage = async ({ params }: SearchResultPageProps) => {
  const { query } = await params

  return (
    <div className="h-full overflow-y-scroll px-5">
      <PreloadQuery query={GET_SEARCH_RESULTS} variables={{ query }}>
        <Suspense fallback={<div>Loading...</div>}>
          <ResultContainer query={query} />
        </Suspense>
      </PreloadQuery>
    </div>
  )
}

export default SearchResultPage
