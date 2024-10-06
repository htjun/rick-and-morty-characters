import { VStack } from '@chakra-ui/react'
import { getClient } from '@/lib/apollo-client'
import { GET_ALL_CHARACTERS } from '@/queries/characters'
import { CharacterList } from '@/components'

export default async function Home() {
  const { data: allCharacters } = await getClient().query({
    query: GET_ALL_CHARACTERS,
  })

  const {
    characters: { results: characters },
  } = allCharacters

  return (
    <VStack>
      <CharacterList characters={characters} />
    </VStack>
  )
}
