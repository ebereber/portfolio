import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'

function Contact() {
  const nameRef = useRef()
  const emailRef = useRef()
  const subjectRef = useRef()
  const messageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value
    }
    return console.log(data)
  }

  return (
    <Flex pb="5rem" flexDirection="column" width={'100%'}>
      <Flex flexDir={'column'} pt={'2rem'} pb="4rem">
        <Text color={'gray.500'}>Ask me anything!</Text>
        <Heading
          fontSize={{
            base: '4xl',
            md: '5xl'
          }}
          fontWeight="800"
        >
          Love to hear from you 👋
        </Heading>
      </Flex>
      <Stack
        as={'form'}
        flexDir="column"
        spacing={'1rem'}
        fontSize="sm"
        fontWeight={'normal'}
        onSubmit={handleSubmit}
      >
        <Flex flexDir={{ base: 'column', lg: 'row' }}>
          <FormControl mr={'1rem'}>
            <FormLabel>Your name </FormLabel>
            <Input
              variant="outline"
              bg="#fafafa"
              focusBorderColor="black"
              type="text"
              placeholder="Carlos Giménez"
              ref={nameRef}
            />
          </FormControl>
          <FormControl mt={{ base: '1rem', sm: '1rem', md: '1rem', lg: '0' }}>
            <FormLabel>Your email </FormLabel>
            <Input
              variant="outline"
              bg="#fafafa"
              focusBorderColor="black"
              type="email"
              placeholder="carlos@email.com"
              ref={emailRef}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Select placeholder="Select one..." bg="#fafafa" ref={subjectRef}>
            <option value="General">General</option>
            <option value="Development">Development</option>
            <option value="Other">Other</option>
            <option value="Just hi!">Just want to say hi!</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea
            rows={6}
            resize="none"
            size="lg"
            bg="#fafafa"
            focusBorderColor="black"
            variant="outline"
            type="textarea"
            placeholder="Your message"
            ref={messageRef}
          />
        </FormControl>
        <Flex mt="2rem">
          <Button
            bg="black"
            color={'white'}
            width={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}
            minW="220px"
            _hover={{ bg: 'white', color: 'black', border: '1px solid black' }}
            type="submit"
          >
            Send
          </Button>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default Contact
