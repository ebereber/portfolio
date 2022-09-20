import React from 'react'
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { Link as LinkRouter, useLocation } from 'react-router-dom'
import{HiOutlineHome, HiOutlineFolderOpen, HiOutlineMail} from "react-icons/hi"
import { changeColor } from '../utils/changeColor'


const LinkItems = [
  { name:"Home",icon: HiOutlineHome, path:"/"},
  { name:"Projects",icon: HiOutlineFolderOpen, path:"/projects"},
  { name:"Contact",icon: HiOutlineMail,  path:"/contact"}
]

export default function SideBar() {

  const {pathname} = useLocation()
  
  return (
    <Box
      display={{ base: 'none',sm:"none", md: 'block' }}
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      position={{ base: 'static', sm: 'static', md: 'sticky' }}
      h={{ md: '100vh' }}
      top="0"
    >
      <Flex h="80" alignItems="start" mx="8" mt={6} justifyContent="space-between">
        <Link as={LinkRouter} to="/" fontSize="2xl" fontFamily="monospace" fontWeight="bold" cursor="pointer"
        
        _hover={{
         color: 'gray.400',
         
       }} >
          />
        </Link>
      </Flex>
      <Flex flexDirection={"column"}>
      {LinkItems.map((link) => (
        
        <NavItem key={link.name} icon={link.icon} name={link.name} path={link.path} color={changeColor(link.path, pathname)} />
        
        
      ))}
      </Flex>
    </Box>
  )
}

const NavItem = ({ icon,name, children,path, ...rest }) => {
  return (
    
    <Link as={LinkRouter} to={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Tooltip label={name} placement='right' hasArrow bg='black' borderRadius={".3rem"} arrowSize="4" > 
      <Flex
        align="center"
        p="4"
        mx="6"
        borderRadius="lg"
        cursor="pointer"
        
         _hover={{
          color: 'black',
          
        }}
        {...rest} 
      >
         
        {icon && (
         
          <Icon
            fontSize="24"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        
        )}
        
        {children}
        
      </Flex>
      </Tooltip>
    </Link>
    
  )
}
