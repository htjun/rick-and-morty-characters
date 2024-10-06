import Image from 'next/image'
import {
  Box,
  ModalCloseButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import LabeledText from './labeled-text'
import { Character } from '@/types'

type CharacterModalProps = {
  isOpen: boolean
  onClose: () => void
  character?: Character
}

const CharacterModal = ({
  isOpen,
  onClose,
  character,
}: CharacterModalProps) => {
  if (!character) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="2xl">
        <ModalHeader>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={8}>
          <Flex
            direction={{
              base: 'column',
              md: 'row',
            }}
            align="start"
            gap={8}
          >
            <Box
              rounded="lg"
              overflow="hidden"
              w="max-content"
              flexShrink={0}
              bgColor="gray.100"
            >
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
              />
            </Box>
            <SimpleGrid columns={2} spacing={4} minChildWidth="max-content">
              <LabeledText label="Status" value={character.status} />
              <LabeledText label="Species" value={character.species} />
              <LabeledText label="Gender" value={character.gender} />
              <LabeledText label="Origin" value={character.origin.name} />
              <LabeledText label="Location" value={character.location.name} />
              <LabeledText
                label="Appeared in"
                value={`${character.episode.length.toString()} episode${
                  character.episode.length === 1 ? '' : 's'
                }`}
              />
            </SimpleGrid>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CharacterModal
