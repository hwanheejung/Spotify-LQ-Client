import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support'
import { cookies } from 'next/headers'
import { setContext } from '@apollo/client/link/context'

const cookieLink = setContext(async (_, { headers }) => {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('sessionId')?.value || ''
  return {
    headers: {
      ...headers,
      cookie: `sessionId=${sessionId}`,
    },
  }
})

const httpLink = new HttpLink({
  uri: `${process.env.API_HOST}/graphql`,
  credentials: 'include',
})

const link = ApolloLink.from([cookieLink.concat(httpLink)])

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
})
