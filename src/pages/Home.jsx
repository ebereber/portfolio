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
            Hi there! My name is Eber, Im a frontend developer. I been developing my skills for the
            past two years now, and I think Im ready for the next step. I enjoy working with react,
            I love it. My firsts steps were in the ux world where I learn the fundamentals about
            design and user experience, the desire to bring projects to life led me to learn how to
            program.
            <br />
            Recently I finish a fullsatck project where I have the lucky to work with a great team
            and to be introduce to new things like team work and stuff like data bases, set up a
            server and structure and work on a project with good practices.
            <br />
            <Link color={'black'} fontWeight="bold" to="/writtings" as={RouterLink}>
              I wanted to make this introduction brief so as not to bore. I wrote in a more extended
              version about my process of becoming a developer in case you are interested in reading
              some more paragraphs.
            </Link>
          </Text>
        </>
      </Stack>{' '}
    </Box>
  )
}

export default Home
