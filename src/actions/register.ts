'use server'

import { redirect } from 'next/navigation'
import { setUser } from '@/lib/user-cookies'
import { User } from '@/types'

export async function register(user: User) {
  // Set user cookie
  setUser(user)

  // Redirect to home page
  redirect('/')
}
