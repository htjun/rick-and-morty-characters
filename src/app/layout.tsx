import type { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import Providers from '@/app/providers'

export const metadata: Metadata = {
  title: 'Rick and Morty Characters',
  description: 'A list of characters from Rick and Morty',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box bg="gray.50" minH="100vh" px={4} py={12}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  )
}
