import { auth } from '@/lib/utils/auth/auth'
import Header from './_components/Header'
import Contents from './_components/Contents'
import CreatePlaylist from './_components/CreatePlaylist'

const DefaultYourLibrary = async () => {
  const { isAuthenticated } = await auth()
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-gray-700">
      <Header />
      {isAuthenticated ? (
        <div className="flex-1 overflow-y-scroll scrollbar-hide">
          <Contents />
        </div>
      ) : (
        <CreatePlaylist />
      )}
    </div>
  )
}

export default DefaultYourLibrary
