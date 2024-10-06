'use client'
import { SimpleGrid } from '@chakra-ui/react'
import { Character } from '@/types'
import CharacterCard from './character-card'

type CharacterListProps = {
  characters: Character[]
}

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <SimpleGrid
      columns={3}
      spacing={{
        base: 4,
        sm: 6,
      }}
      w="full"
      maxW="container.xl"
      minChildWidth="container.xs"
    >
      {characters.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </SimpleGrid>
  )
}

export default CharacterList
