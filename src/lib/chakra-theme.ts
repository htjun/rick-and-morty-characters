import { extendTheme } from '@chakra-ui/react'
import { inter, manrope } from './fonts'

const theme = extendTheme({
  fonts: {
    body: inter.style.fontFamily,
    heading: manrope.style.fontFamily,
  },
  sizes: {
    container: {
      xs: '300px',
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1200px',
    },
  },
  colors: {
    key: '#319795',
  },
})

export default theme
