import { getClient } from '@/lib/apollo/ApolloClient'
import { GET_USER } from '@/lib/queries/userQuery'
import Header from './_components/Header'

const YourLibraryPage = async () => {
  const { data } = await getClient().query({ query: GET_USER })
  console.log('User data:', data.getUserInfo)

  return (
    <div className="h-full min-w-[250px] rounded-lg bg-gray-700">
      <Header />
    </div>
  )
}

export default YourLibraryPage
