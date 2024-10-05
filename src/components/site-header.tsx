import { Flex, Heading } from '@chakra-ui/react'
import { odibeeSans } from '@/lib/fonts'

const SiteHeader = () => {
  return (
    <Flex justify="center">
      <Heading
        as="h1"
        fontSize={{
          base: '5xl',
          sm: '7xl',
          md: '8xl',
        }}
        fontFamily={odibeeSans.style.fontFamily}
        color="key"
        textShadow="0 0 8px #e0ff00"
      >
        Rick and Morty
      </Heading>
    </Flex>
  )
}

export default SiteHeader
