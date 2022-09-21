import { Box, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import dashApp from '../assets/dash6.svg'
import balance from '../assets/balance10.svg'
import img from '../assets/dev1.svg'
import reactImg from '../assets/react.svg'
import obstacle from '../assets/obstacle1.svg'
import { Link as RouterLink } from 'react-router-dom'

function Home() {
  return (
    <Box
      layerStyle="selected"
      /*  px={{ base: '2rem', sm: '4rem', md: '8', lg: '10' }} */
    >
      <Flex flexDir={'column'} pt={'2rem'} pb="2rem">
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
          How in three months I didn't become a developer
        </Heading>
        <Text fontSize={'md'} fontStyle="italic" color={'gray.500'}>
          In this article I tell you about my growth and my background as a developer.
        </Text>
      </Flex>
      <Box mb={8}>
        {' '}
        <Image src={img} />
      </Box>
      <Stack mt={'2rem'} fontFamily="Amiri" fontSize={'18px'}>
        <>
          <Text>
            <Text as="span" fontSize={'1.5rem'} fontWeight="bold">
              I
            </Text>
            {''} was also one of those who believed that in three months I could find a job as a
            developer. That belief, when I understood the complexity of the matter, ended up fading
            away after a short time. It didn't hurt to hit the wall and ask myself if the premise
            that in three months you can get a job is real.
            <br />
            <br />
            Surely there are those who succeeded and deserve to be applauded, because they probably
            put all the effort, or have known with great wisdom to avoid the recruiters' filters.
            But you have to understand that it is very likely that in three, six months or more, you
            will not be ready for your first job, and it is not a bad thing. And this is something
            that I am actually writing for myself. I am in that stage, in that search after being
            studying, practicing and developing for more than a year. Of course, the time it takes
            to 'be ready' is relative, the learning curve will vary depending on the rhythms and
            capabilities of each one. <br />
            <br />
          </Text>
          <Text fontWeight={'bold'}>What does it mean to be ready?</Text>
          <Box mb={8}>
            {' '}
            <Image src={obstacle} />
          </Box>
          <br />
          <Text>
            Well I do not have the answer, the most accurate, in my experience, would be to say that
            you are never ready, and this is something I understood recently and I want to share.
            <br /> Many times, those of us who want to have control over everything, to be super
            prepared, make the mistake of feeling that the road we have traveled is not enough to
            achieve our goal, that we are not ready to take the next step. Insecurities and fears
            start to play against us, and we begin to measure every step we take. Of course,
            overcoming this requires a lot of work, but when we realize that the inadequacy we feel
            is the same that is preventing us from growing, in this particular case, as a developer,
            we put a limit to those thoughts and decide that we are ready to take the next step.
          </Text>
          <br />
          <Text fontWeight={'bold'}>Time and patience are critical</Text>
          <Text>
            At the beginning, everything may seem complicated and confusing, but with time and
            consistency, everything starts to become simpler.
          </Text>
          <br />
          <Text fontWeight={'bold'}>Learning process</Text>
          <Box my={8}>
            {' '}
            <Image src={reactImg} />
          </Box>
          <br />
          <Text>
            Each project I do is an instance of learning in which I am always implementing a new
            technology. Of course there are many of these and along the way you make decisions about
            the tools you incorporate to your stack. In this case React is my favorite, to which I
            have dedicated hundreds of hours of work.
          </Text>
          <br />
          <Text fontWeight={'bold'}>Early projects</Text>
          <Text>
            My first projects started with a simple database provided by firebase platform, which
            makes it easy to persist data and removes the complexity of setting up a server. I had
            to focus on one thing at a time.{' '}
            <Link as={RouterLink} to="/projects" fontWeight={'bold'}>
              Check out my portfolio for more details.
            </Link>
          </Text>
          <br />

          <Flex py="1.25rem" bg="#6bcba8" px="2rem" justify="center" alignContent={'center'}>
            <Flex w="10rem" h={'auto'}>
              <Image src={dashApp} objectFit="cover" />
            </Flex>
            <Flex
              flexDir={'column'}
              flex="1 1 auto"
              ml="1rem"
              justify={'center'}
              display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
            >
              <Heading fontSize={'1.25rem'}>Ecommerce</Heading>
              <Text fontSize={'.875rem'}>Web site for a lighting factory.</Text>
            </Flex>
          </Flex>
          <br />
          <Text mr={'2rem'}>
            This one above is pretty simple, it contains a home page that shows the products, a
            product detail page, shopping cart and check out. It was styled with style components
            and used firebase as a NoSQL database.
          </Text>
          <Text>
            Later I started to create my own servers and implement SQL and NoSQL databases, which
            allowed me to dig deeper and understand a lot of concepts and functions that I had
            ignored so far. The next project was a personal finance app. It was made with React,
            Chakra-ui , Express and MySql as a NoSql database.
          </Text>
          <br />
          <Flex py="1.25rem" bg="#ffd6c1" px="2rem" justify="center" alignContent={'center'}>
            <Flex w="10rem" h={'auto'}>
              <Image src={balance} objectFit="cover" />
            </Flex>
            <Flex
              flexDir={'column'}
              flex="1 1 auto"
              ml="1rem"
              justify={'center'}
              display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
            >
              <Heading fontSize={'1.25rem'}>Personal Finance App</Heading>
              <Text fontSize={'.875rem'}>Allows you to keep track your income and expenses.</Text>
            </Flex>
          </Flex>
          <br />
          <Text fontWeight={'bold'}>Finally</Text>
          <br />
          <Text>
            I am still working on improving, I know I have a lot to learn, but I feel ready to have
            a real work experience. {''}
            <Link as={RouterLink} to="/contact" fontWeight={'bold'}>
              If you are interested you can contact me.
            </Link>{' '}
            <br />
            Thanks for reading.
          </Text>
        </>
      </Stack>{' '}
    </Box>
  )
}

export default Home
