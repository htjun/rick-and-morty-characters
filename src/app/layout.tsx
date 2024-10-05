import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
