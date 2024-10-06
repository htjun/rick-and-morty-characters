import { cookies } from 'next/headers'
import type { User } from '@/types'

// Retrieve the user from cookies
export const getUser = (): User | undefined => {
  try {
    const userCookie = cookies().get('user')?.value

    if (!userCookie) {
      return
    }

    return JSON.parse(userCookie)
  } catch (error) {
    console.error('Error getting user data', error)
    return
  }
}

// Set the user in cookies
export const setUser = (user: User): void => {
  try {
    cookies().set('user', JSON.stringify(user), {
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
  } catch (error) {
    console.error('Error setting user data', error)
  }
}
