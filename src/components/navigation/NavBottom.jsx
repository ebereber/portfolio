import { Box, HStack, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import {
  HiOutlineHome,
  HiOutlineFolderOpen,
  HiOutlineMail,
  HiOutlineDocumentText
} from 'react-icons/hi'
import { Link as LinkRouter, useLocation } from 'react-router-dom'
import { changeColor } from '../../utils/changeColor'

function NavBottom() {
  const { pathname } = useLocation()

  const LinkItems = [
    { name: 'Home', icon: HiOutlineHome, path: '/' },
    { name: 'Projects', icon: HiOutlineFolderOpen, path: '/projects' },
    { name: 'Writtings', icon: HiOutlineDocumentText, path: '/writtings' },
    { name: 'Contact', icon: HiOutlineMail, path: '/contact' }
  ]

  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      background="white"
      as={'nav'}
      position="fixed"
      bottom={0}
      width={'100%'}
      overflow={'hidden'}
      boxShadow="rgb(0 0 0 / 15%) 0px 2px 10px"
    >
      <HStack justifyContent="space-between" p={6}>
        {LinkItems.map((link) => (
          <Link
            as={LinkRouter}
            to={link.path}
            key={link.name}
            display="flex"
            flex="1"
            justifyContent={'center'}
            alignItems="center"
          >
            <Icon as={link.icon} color={changeColor(link.path, pathname)} fontSize={'24px'} />
          </Link>
        ))}
      </HStack>
    </Box>
  )
}

export default NavBottom
