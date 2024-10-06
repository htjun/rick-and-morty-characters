'use client' // Error boundaries must be Client Components

import { Button, Heading, Text, VStack } from '@chakra-ui/react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <VStack spacing={8} py={24}>
      <Heading textAlign="center">Something went wrong</Heading>
      <Text textAlign="center" color="gray.500">
        {error.message}
      </Text>
      <Button onClick={() => reset()}>Try again</Button>
    </VStack>
  )
}
