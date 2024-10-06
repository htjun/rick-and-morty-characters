import { Divider, Text, VStack } from '@chakra-ui/react'
import { getUser } from '@/lib/user-cookies'
import { getClient } from '@/lib/apollo-client'
import { GET_ALL_CHARACTERS } from '@/queries/characters'
import { CharacterList, UserInfo } from '@/components'

export default async function Home() {
  const user = getUser()

  const { data: allCharacters } = await getClient().query({
    query: GET_ALL_CHARACTERS,
  })

  const {
    characters: {
      info: { count },
      results: characters,
    },
  } = allCharacters

  return (
    <VStack spacing={16}>
      <Text fontWeight="semibold" color="key">
        {count} characters
      </Text>
      <CharacterList characters={characters} />
      <Divider />
      <UserInfo user={user} />
    </VStack>
  )
}
