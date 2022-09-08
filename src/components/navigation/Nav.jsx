import { Avatar, Flex, HStack, Heading, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import image from '../../assets/Avatar.jpg'

function Nav() {
  return (
    <Flex
      alignItems={'start'}
      /* flexDirection={{ base: 'row', sm: 'row', md: 'row', lg: 'column' }} */
      fontFamily="sans-serif"
    >
      <Avatar size={{ base: 'md', sm: 'md', md: 'md', lg: 'lg' }} src={image} />
      <Flex
        ml={{ base: '4', sm: '4', md: '4', lg: '4' }}
        align={'start'}
        flexDirection="column"
        mt={{ base: '0', sm: '0', md: '0', lg: '1rem' }}
      >
        <Flex>
          <Heading fontSize={'md'} fontWeight="medium">
            Eber Leguizamón
          </Heading>
        </Flex>

        <HStack mt={'.5rem'} fontSize=".85rem" color={'gray.500'}>
          <Tooltip
            borderRadius={'.3rem'}
            arrowSize="4"
            placement="right"
            bg="black"
            hasArrow
            label="Follow me on linkedin"
          >
            <Link href="https://www.linkedin.com/in/eberr-leguizamon/" target="_blank">
              linkedin
            </Link>
          </Tooltip>
          <Tooltip
            borderRadius={'.3rem'}
            placement="right"
            bg="black"
            hasArrow
            label="Follow me on github"
          >
            <Link href="https://github.com/ebereber" target="_blank">
              github
            </Link>
          </Tooltip>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Nav
