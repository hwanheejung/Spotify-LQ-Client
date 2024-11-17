import { auth } from '@/lib/utils/auth/auth'
import Albums from './_components/Albums'
import CreatePlaylist from './_components/CreatePlaylist'
import Header from './_components/Header'

const YourLibraryPage = async () => {
  const { isAuthenticated } = await auth()
  return (
    <div className="min-w-[250px] max-w-[400px] overflow-hidden rounded-lg bg-gray-700">
      <Header />
      <div className="max-h-[calc(100dvh-180px)] overflow-y-scroll">
        {isAuthenticated ? <Albums /> : <CreatePlaylist />}
      </div>
    </div>
  )
}

export default YourLibraryPage
