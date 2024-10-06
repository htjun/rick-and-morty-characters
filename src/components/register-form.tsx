'use client'

import Link from 'next/link'
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react'
import { register } from '@/actions/register'
import { User } from '@/types'

const RegisterForm = ({ user }: { user?: User }) => {
  const handleSubmit = async (formData: FormData): Promise<void> => {
    const username = formData.get('username') as string
    const jobTitle = formData.get('jobTitle') as string

    await register({ username, jobTitle })
  }

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        handleSubmit(formData)
      }}
    >
      <VStack align="start" spacing={8}>
        <FormControl as="fieldset">
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            type="text"
            defaultValue={user?.username}
            mb={8}
            required
          />
          <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
          <Input
            id="jobTitle"
            name="jobTitle"
            type="text"
            defaultValue={user?.jobTitle}
            required
          />
        </FormControl>
        <HStack>
          <Button type="submit">{user ? 'Update' : 'Register'}</Button>
          {/* Only show cancel button if user data exists */}
          {user && (
            <Link href="/">
              <Button as="span" variant="outline">
                Cancel
              </Button>
            </Link>
          )}
        </HStack>
      </VStack>
    </form>
  )
}

export default RegisterForm
