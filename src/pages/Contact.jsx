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
  Textarea,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { validation } from '../utils/formValidation'

function Contact() {
  const nameRef = useRef()
  const emailRef = useRef()
  const subjectRef = useRef()
  const messageRef = useRef()
  const [error, setError] = useState(null)
  const [toastMessage, setToastMessage] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value
    }
    const errors = validation(data)
    if (errors != null) {
      setError(errors)
      return
    }

    setError(null)
    setLoading(true)
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
      .post('https://email-api-pi.vercel.app/api/send-email', data)
      .then((res) => {
        setLoading(false)
        setToastMessage({
          title: 'Message sent',
          body: 'I will be in contact as soon as possible'
        })
      })
      .catch((err) =>
        setToastMessage({
          title: 'Oops.. An error ocurred',
          body: 'Please try again later'
        })
      )
  }

  useEffect(() => {
    if (toastMessage) {
      const { title, body } = toastMessage
      toast({
        title,
        description: body,

        duration: 3000,
        isClosable: true,
        onCloseComplete: () => {
          navigate('/', { replace: true })
        }
      })
    }
  }, [toastMessage, toast])

  return (
    <Flex pb="5rem" flexDirection="column" width={'100%'}>
      <Flex flexDir={'column'} pt={'2rem'} pb="4rem">
        <Text color={'gray.500'} fontFamily="Amiri" fontStyle={'italic'}>
          Ask me anything!
        </Text>
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
        <Flex>
          {error && (
            <Text as="span" p="15px 18px" bg="#ffebee" w="full" borderRadius={'lg'} color="#ff3852">
              {error}
            </Text>
          )}
        </Flex>
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
          {loading ? (
            <Button
              isLoading
              bg="black"
              color={'white'}
              width={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}
              minW="220px"
              _hover={{ bg: 'blackAlpha.800' }}
              type="submit"
            >
              Send
            </Button>
          ) : (
            <Button
              bg="black"
              color={'white'}
              width={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}
              minW="220px"
              _hover={{ bg: 'blackAlpha.800' }}
              type="submit"
            >
              Send
            </Button>
          )}
        </Flex>
      </Stack>
    </Flex>
  )
}

export default Contact
