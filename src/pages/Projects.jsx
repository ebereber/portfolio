/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import dash from '../assets/dash1.png'
import balance from '../assets/balanceApp.png'

function Projects() {
  return (
    <Box>
      <Flex pt={'2rem'} pb="4rem" flexDir={'column'}>
        <Text>Projects</Text>
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
              <Text>
                <Text as="span" fontWeight={'bold'} fontSize="xl">
                  Dash Iluminación -
                </Text>{' '}
                Tienda e-commerce de fábrica de artefactos de iluminación
              </Text>
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
          <Link href="#" _hover={{ opacity: 0.6 }}>
            <Flex>
              <Image src={balance} />
            </Flex>
            <Flex py="0.5rem">
              <Text>
                <Text as="span" fontWeight={'bold'} fontSize="xl">
                  My balance
                </Text>{' '}
                App que permite llevar un balance de ingresos y egrosos.
              </Text>
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
          <Link href="#" _hover={{ opacity: 0.6 }}>
            <Flex>
              <Image src="https://kailoon.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fw4180a3x%2Fproduction%2Fa71be3f327b174d4e6b0f6e36c21308f684327b0-800x600.png&w=1920&q=75" />
            </Flex>
            <Flex py="0.5rem">
              <Text>
                <Text as="span" fontWeight={'bold'} fontSize="xl">
                  Lorem ipsum
                </Text>{' '}
                dolor sit amet consectetur adipisicing elit. Velit earum, vero, amet nostrum iste.
              </Text>
            </Flex>
          </Link>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}
export default Projects
