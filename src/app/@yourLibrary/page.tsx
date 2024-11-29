import { auth } from '@/lib/utils/auth/auth'
import Contents from './_components/Contents'
import CreatePlaylist from './_components/CreatePlaylist'
import Header from './_components/Header'

const YourLibraryPage = async () => {
  const { isAuthenticated } = await auth()
  return (
    <div className="h-full overflow-hidden rounded-lg bg-gray-700">
      <Header />
      {isAuthenticated ? (
        <div className="max-h-[calc(100dvh-230px)] overflow-y-scroll scrollbar-hide">
          <Contents />
        </div>
      ) : (
        <CreatePlaylist />
      )}
    </div>
  )
}

export default YourLibraryPage
