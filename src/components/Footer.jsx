import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  let d = new Date()
  let currentYear = d.getFullYear()

  return (
    <Flex as={'footer'} justify="center" pb={{ base: '5', sm: '5', md: '5', lg: '0' }}>
      <Text color={'gray.500'} fontSize="sm">
        {' '}
        {currentYear} &copy;Eber. Made with{' '}
        <Text as={'span'} color="red.400" fontWeight={700}>
          {' '}
          React,{' '}
          <Text as={'span'} color="red.400" fontWeight={700}>
            Chakra-ui{' '}
          </Text>
        </Text>
      </Text>
    </Flex>
  )
}

export default Footer
