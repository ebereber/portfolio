import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      _selection: {
        background: 'pink.100'
      }
    }
  },
  fonts: {
    heading: 'Roboto, Amiri, sans-serif',
    body: 'Roboto, Amiri, serif'
  }
})

export default theme
