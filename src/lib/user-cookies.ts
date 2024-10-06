import { cookies } from 'next/headers'
import type { User } from '@/types'

export const getUser = (): User | null => {
  try {
    const userCookie = cookies().get('user')?.value

    if (!userCookie) {
      return null
    }

    return JSON.parse(userCookie)
  } catch (error) {
    console.error('Error getting user data', error)
    throw error
  }
}

export const setUser = (user: User): void => {
  try {
    cookies().set('user', JSON.stringify(user), {
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
  } catch (error) {
    console.error('Error setting user data', error)
    throw error
  }
}
