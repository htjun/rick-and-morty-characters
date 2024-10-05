import { extendTheme } from '@chakra-ui/react'
import { inter, manrope } from './fonts'

const theme = extendTheme({
  fonts: {
    body: inter.style.fontFamily,
    heading: manrope.style.fontFamily,
  },
  colors: {
    key: '#319795',
  },
})

export default theme
