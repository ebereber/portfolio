import { Flex, keyframes } from '@chakra-ui/react'

import React from 'react'

import Nav from './navigation/Nav'

const fade = keyframes`
  from {opacity: 0}
  to {opacity:1}
`

function Header() {
  const fadeAnimation = `${fade} .60s ease-in-out`
  return (
    <Flex
      display={{ base: 'block', sm: 'block', md: 'block', lg: 'none' }}
      animation={fadeAnimation}
      p="1.5rem"
    >
      <Nav />
    </Flex>
  )
}

export default Header
