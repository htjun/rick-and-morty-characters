import { Divider, Text, VStack } from '@chakra-ui/react'
import { getUser } from '@/lib/user-cookies'
import { getClient } from '@/lib/apollo-client'
import { GET_ALL_CHARACTERS } from '@/queries/characters'
import { CharacterList, Pagination, UserInfo } from '@/components'

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  // Get current page number from query params
  const pageNumber = searchParams.page ? parseInt(searchParams.page) : 1

  // Fetch all characters from the API
  const { data: allCharacters } = await getClient().query({
    query: GET_ALL_CHARACTERS,
    variables: { page: pageNumber },
  })

  const {
    characters: {
      info: { count, pages },
      results: characters,
    },
  } = allCharacters

  // Get user data from cookies
  const user = getUser()

  return (
    <VStack spacing={16}>
      <Text fontWeight="semibold" color="key">
        {count} characters
      </Text>
      <CharacterList characters={characters} />
      <Pagination total={pages} current={pageNumber} />
      <Divider />
      <UserInfo user={user} />
    </VStack>
  )
}
