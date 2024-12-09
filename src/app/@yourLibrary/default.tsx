import { auth } from '@/lib/utils/auth/auth'
import { cookies } from 'next/headers'
import Contents from './_components/Contents'
import CreatePlaylist from './_components/CreatePlaylist'
import { FilterProvider, IFilterType } from './_components/FilterContext'
import Header from './_components/Header'

async function getDefaultFilter(): Promise<IFilterType> {
  const cookieStore = await cookies()
  const filter = cookieStore.get('left-panel:filter')
  if (filter) return filter.value as IFilterType
  return 'ALBUM'
}

const YourLibraryDefault = async () => {
  const { isAuthenticated } = await auth()
  const defaultFilter: IFilterType = await getDefaultFilter()

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-gray-700">
      {isAuthenticated ? (
        <FilterProvider defaultFilter={defaultFilter}>
          <Header />
          <Contents />
        </FilterProvider>
      ) : (
        <CreatePlaylist />
      )}
    </div>
  )
}

export default YourLibraryDefault
