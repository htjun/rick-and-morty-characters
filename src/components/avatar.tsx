import Image from 'next/image'
import { Box } from '@chakra-ui/react'

const Avatar = ({ image, name }: { image: string; name: string }) => {
  return (
    <Box
      position="relative"
      width="60px"
      height="60px"
      overflow="hidden"
      rounded="full"
      bg="gray.100"
    >
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
        style={{ borderRadius: '60px' }}
      />
    </Box>
  )
}

export default Avatar
