import { Divider, Flex, keyframes, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Nav from './navigation/Nav'

const fade = keyframes`
  from {opacity: 0}
  to {opacity:1}
`

function Aside() {
  const fadeAnimation = `${fade} .60s ease-in-out`

  const tools = [
    { name: 'React' },
    { name: 'MongoDB' },
    { name: 'Node' },
    { name: 'Chakra-ui' },
    { name: 'Styled-components' },
    { name: 'Figma' }
  ]

  return (
    <Flex
      flexDir={'column'}
      display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
      animation={fadeAnimation}
      h={'100vh'}
      w="18rem"
      minW={'18rem'}
      px="2rem"
      pt="2.5rem"
      pb={'1rem'}
      justifyContent={'space-between'}
      position="sticky"
      top="0"
    >
      <Flex flexDir={'column'}>
        <Nav />
        <Divider mt={'1rem'} />
        <Flex flexDir={'column'} pt=".5rem">
          <Text color={'gray.500'} mb=".5rem" fontSize={'.75rem'}>
            CURRENT STACK
          </Text>
          <Flex flexWrap={'wrap'}>
            {tools.map((tool, i) => (
              <Text
                key={i}
                as={'span'}
                px=".5rem"
                py=".25rem"
                bg="teal.100"
                borderRadius={'0.25rem'}
                mr="0.25rem"
                mb={'.5rem'}
                fontSize=".75rem"
                lineHeight={'1rem'}
              >
                {tool.name}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Aside
