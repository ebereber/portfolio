import { Box, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Home() {
  return (
    <Box
      layerStyle="selected"
      /*  px={{ base: '2rem', sm: '4rem', md: '8', lg: '10' }} */
    >
      <Flex flexDir={'column'} pt={'2rem'} pb="0rem">
        {/* <Text color={'gray.500'} fontFamily="Amiri" fontStyle={'italic'}>
          A little about me
        </Text> */}
        <Heading
          fontSize={{
            base: '4xl',
            md: '5xl'
          }}
          mb="1rem"
          fontWeight="900"
        >
          Eber Leguizamón
        </Heading>
        <Text fontSize={'md'} fontStyle="italic" color={'gray.500'}>
          Software developer
        </Text>
      </Flex>
      <Stack mt={'1rem'} fontFamily="Amiri" fontSize={'18px'}>
        <>
          <Text>
            Hi there! My name is Eber, Im a frontend developer. I enjoy working with react. My
            firsts steps were in the ux world where I learn the fundamentals about design and user
            experience, the desire to bring projects to life led me to learn how to program.
            <br />
            Recently I finish a fullstack project where I had the lucky to work with a great team
            and be introduce to the backend environment.
            <br />
            <Link color={'black'} fontWeight="bold" to="/projects" as={RouterLink}>
              You can see some of my work here.
            </Link>
          </Text>
        </>
      </Stack>{' '}
    </Box>
  )
}

export default Home
