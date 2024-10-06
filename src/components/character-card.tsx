import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { Character } from '@/types'
import Avatar from './avatar'

type CharacterCardProps = {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Card
      rounded="2xl"
      shadow="sm"
      _hover={{ shadow: 'lg' }}
      transition="all 0.2s"
      cursor="pointer"
      bg="white"
    >
      <CardHeader>
        <HStack spacing={4}>
          <Avatar image={character.image} name={character.name} />
          <VStack spacing={1} align="start">
            <Heading size="md" letterSpacing="-0.02em" textAlign="left">
              {character.name}
            </Heading>
            <Text fontSize="sm" fontWeight="medium" color="gray.500">
              {character.species}
            </Text>
          </VStack>
        </HStack>
      </CardHeader>
      <CardBody
        display={{
          base: 'none',
          sm: 'block',
        }}
        alignSelf="start"
      >
        <Text fontSize="sm" color="gray.500">
          {character.location.name}
        </Text>
      </CardBody>
    </Card>
  )
}

export default CharacterCard
