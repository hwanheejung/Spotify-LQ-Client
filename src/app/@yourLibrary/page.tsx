// import { getClient } from '@/lib/apollo/ApolloClient'
// import { GET_USER } from '@/lib/queries/userQuery'
import { auth } from '@/lib/utils/auth/auth'
import Header from './_components/Header'
import CreatePlaylist from './_components/CreatePlaylist'

const YourLibraryPage = async () => {
  // const { data } = await getClient().query({ query: GET_USER })
  // console.log('User data:', data.getUserInfo)

  const { isAuthenticated } = await auth()
  return (
    <div className="h-full min-w-[250px] rounded-lg bg-gray-700">
      <Header />
      {isAuthenticated ? (
        <div>
          <h2>Your Library</h2>
          <p>Playlists, artists, albums, podcasts</p>
        </div>
      ) : (
        <CreatePlaylist />
      )}
    </div>
  )
}

export default YourLibraryPage
