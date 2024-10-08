import { Inter, Odibee_Sans, Manrope } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const odibeeSans = Odibee_Sans({
  weight: ['400'],
  subsets: ['latin'],
})

export const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
})
