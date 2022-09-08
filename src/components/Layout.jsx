import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import InfoUp from './InfoUp'
import NavBottom from './navigation/NavBottom'
import SideBar from './SideBar'

function Layout({ children }) {
  return (
    <Flex
      maxW="1504px"
      m={'auto'}
      flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
    >
      <SideBar />

      <Flex
        flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
        maxW="52rem"
        w="100%"
        mx={'auto'}
      >
        <Box display={{ lg: 'none' }}>
          <InfoUp />
        </Box>
        <Header />
        <Flex
          as="main"
          w={'100%'}
          px={{ base: '1.5rem', lg: '5rem' }}
          pb="5rem"
          flexDirection="column"
        >
          <Box display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}>
            <InfoUp />
          </Box>
          {children}
        </Flex>
        <Box pb={'5rem'} px="1.5" display={{ base: 'block', lg: 'none' }}>
          <Footer />
        </Box>
      </Flex>

      <Aside />
      <NavBottom />
    </Flex>
  )
}

export default Layout
