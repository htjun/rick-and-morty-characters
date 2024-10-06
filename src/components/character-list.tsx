'use client'

import React, { useState } from 'react'
import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { Character } from '@/types'
import { CharacterCard, CharacterModal } from '.'

type CharacterListProps = {
  characters: Character[]
}

const CharacterList = ({ characters }: CharacterListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    null
  )

  const handleOpen = (character: Character): void => {
    setSelectedCharacterId(character.id)
    onOpen()
  }

  const selectedCharacter = characters.find(
    character => character.id === selectedCharacterId
  )

  return (
    <>
      {selectedCharacter && (
        <CharacterModal
          isOpen={isOpen}
          onClose={onClose}
          character={selectedCharacter}
        />
      )}
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
          <Box
            key={character.id}
            as="button"
            onClick={() => handleOpen(character)}
            rounded="2xl"
            _focusVisible={{
              outline: '2px solid #319795',
            }}
            aria-label="Character Card"
          >
            <CharacterCard character={character} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}

export default CharacterList
