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
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
  }
})

export default theme
