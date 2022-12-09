/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

function InfoUp() {
  const download = () => {
    fetch('eber-resume-2022.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'eber-resume-2022.pdf'
        alink.click()
      })
    })
  }

  return (
    <Box mx="auto" p="1.5rem">
      <Box h="100%" px="8px">
        <Box m="16px -12px 0px" background="teal.100" borderRadius={'4px'}>
          <Flex maxW={'728px'} p="12px">
            <Text fontWeight="normal" fontSize=".85rem" lineHeight={'1rem'}>
              So glad you're here 😊.
              <Link onClick={download}>
                {' '}
                You can{' '}
                <Text as="span" fontWeight={'bold'}>
                  download{' '}
                </Text>
                my resume by clicking here.
              </Link>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default InfoUp

/* 
background="rgba(0, 0, 0, 0.05)" */
