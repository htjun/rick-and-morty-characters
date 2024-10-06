import { HttpLink } from '@apollo/client'
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.RICK_AND_MORTY_GRAPHQL_API_URL as string,
      fetchOptions: { cache: 'no-store' },
    }),
  })
})
