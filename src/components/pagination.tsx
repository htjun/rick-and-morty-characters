'use client'

import Link from 'next/link'
import { Box, Button, HStack } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

type PaginationProps = {
  total: number
  current: number
}

const Pagination = ({ total, current }: PaginationProps) => {
  const maxPages = 5

  const getPageNumbers = () => {
    const pageNumbers = Array.from(Array(total).keys()).map(i => i + 1)

    if (total <= maxPages) {
      return pageNumbers
    }

    // Calculate the start and end page numbers
    const startPage = Math.max(1, current - Math.floor(maxPages / 2))
    const endPage = Math.min(total, startPage + maxPages - 1)

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  }

  const pageNumbers = getPageNumbers()

  const getPageUrl = (page: number) => {
    return page === 1 ? '/' : `/?page=${page}`
  }

  // Next and previous buttons increment and decrement the current page number by maxPages when possible
  const next = current > total - maxPages ? null : current + maxPages
  const prev = current <= maxPages ? null : current - maxPages

  return (
    <HStack>
      {prev && (
        // Hide on small screens to avoid breaking the layout
        <Box display={{ base: 'none', md: 'block' }}>
          <Link href={getPageUrl(prev)}>
            <Button as="span" leftIcon={<ArrowBackIcon />} fontSize="sm">
              Prev
            </Button>
          </Link>
        </Box>
      )}
      {pageNumbers.map(page => (
        <Link key={page} href={getPageUrl(page)}>
          <Button
            as="span"
            color={page === current ? 'key' : 'gray.600'}
            fontSize="sm"
          >
            {page}
          </Button>
        </Link>
      ))}
      {next && (
        <Box display={{ base: 'none', md: 'block' }}>
          <Link href={getPageUrl(next)}>
            <Button as="span" rightIcon={<ArrowForwardIcon />} fontSize="sm">
              Next
            </Button>
          </Link>
        </Box>
      )}
    </HStack>
  )
}

export default Pagination
