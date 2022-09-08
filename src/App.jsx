import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import '../src/theme/styles.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  )
}

export default App
