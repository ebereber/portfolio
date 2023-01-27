import { Box, Flex, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import dash from '../assets/dash1.png'
import balance from '../assets/balanceApp.png'

function Projects() {
  return (
    <Box>
      <Flex pt={'2rem'} pb="4rem" flexDir={'column'}>
        <Text color={'gray.500'} fontFamily="Amiri" fontStyle={'italic'}>
          Projects
        </Text>
        <Heading
          fontSize={{
            base: '4xl',
            md: '5xl'
          }}
        >
          Some of the works I've done.
        </Heading>
      </Flex>
      <SimpleGrid gap={'2rem'} columns={[1, 1, 1, 2, 2]} rowGap="4rem">
        <Flex
          flexDir={'column'}
          justifyContent="center"
          width={'100%'}
          maxW={{ base: '500px' }}
          align={'center'}
          m="auto"
        >
          <Link href="https://dashh.netlify.app/" target="_blank" _hover={{ opacity: 0.8 }}>
            <Flex>
              <Image src={dash} />
            </Flex>
            <Flex py="0.5rem">
              <Text as="span" fontWeight={'bold'} fontSize="xl">
                Dash Iluminación -
              </Text>{' '}
            </Flex>
          </Link>
        </Flex>
        <Flex
          flexDir={'column'}
          justifyContent="center"
          width={'100%'}
          maxW={{ base: '500px' }}
          align={'center'}
          m="auto"
        >
          <Link href="https://github.com/ebereber/alkemy" _hover={{ opacity: 0.6 }}>
            <Flex>
              <Image src={balance} />
            </Flex>
            <Flex py="0.5rem">
              <Text as="span" fontWeight={'bold'} fontSize="xl">
                My balance
              </Text>{' '}
            </Flex>
          </Link>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}
export default Projects
