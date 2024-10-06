import { Flex } from '@chakra-ui/react'
import { LoadingSpinner } from '@/components'

export default function Loading() {
  return (
    <Flex w="full" justifyContent="center" py={24}>
      <LoadingSpinner />
    </Flex>
  )
}
