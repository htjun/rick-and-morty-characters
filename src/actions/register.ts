'use server'

import { setUser } from '@/lib/user-coookies'
import { redirect } from 'next/navigation'
import { User } from '@/types'

export async function register(user: User) {
  // Set user cookie
  setUser(user)

  // Redirect to home page
  redirect('/')
}
