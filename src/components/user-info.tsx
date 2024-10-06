import Link from 'next/link'
import { Button, HStack, Text } from '@chakra-ui/react'
import type { User } from '@/types'

type UserInfoProps = {
  user?: User
}

const UserInfo = ({ user }: UserInfoProps) => {
  if (!user) {
    return null
  }

  const { username, jobTitle } = user

  return (
    <HStack>
      <Text fontSize="sm" color="gray.500">
        Registered as
      </Text>
      <Text fontSize="sm" fontWeight="medium" color="gray.700">
        {`${username} (${jobTitle})`}
      </Text>
      <Link href="/register">
        <Button as="div" size="sm" variant="outline">
          Edit
        </Button>
      </Link>
    </HStack>
  )
}

export default UserInfo
