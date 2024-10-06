import { Card, Text, VStack } from '@chakra-ui/react'
import { RegisterForm } from '@/components'
import { getUser } from '@/lib/user-cookies'

const RegisterPage = () => {
  const user = getUser()

  return (
    <VStack spacing={6} py={12}>
      <Card
        w="full"
        maxW="container.sm"
        p={8}
        bg="white"
        rounded="2xl"
        shadow="sm"
      >
        <VStack spacing={8} align="stretch">
          <Text color="gray.500">
            Please provide your information to view the character list
          </Text>
          <RegisterForm user={user} />
        </VStack>
      </Card>
    </VStack>
  )
}

export default RegisterPage
