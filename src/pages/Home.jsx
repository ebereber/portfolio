import { Badge, Box, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function Home() {
  const [short, setShort] = useState(true)

  return (
    <Box
      layerStyle="selected"
      /*  px={{ base: '2rem', sm: '4rem', md: '8', lg: '10' }} */
    >
      <Heading fontSize={'5xl'} pt={'2rem'} fontWeight="800">
        My journey as a developer
      </Heading>
      <Text fontSize={'1rem'} fontStyle="italic" color={'gray'}>
        Soy un desarrollador argentino, que empezó hace mas de asdasdasdas asdasdas asdfasdas asdas
      </Text>
      <Box my={8}>{/*  <Image src={} /> */}</Box>
      <HStack>
        <Link onClick={() => setShort(true)}>
          <Badge colorScheme="green">Short</Badge>
        </Link>
        <Link onClick={() => setShort(false)}>
          <Badge colorScheme={'purple'}>Large</Badge>
        </Link>
      </HStack>
      <Stack mt={'2rem'}>
        <Text fontSize={'xl'} fontStyle="italic" color={'gray.400'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero dignissimos,
          dolorem voluptatibus animi tenetur illum.
        </Text>
        <br />
        {short ? (
          <Text>
            Hola! Soy un developer argentino que viene estudiando y trabajando diariamente para
            crecer como desarrollador. Me agrada mucho el diseño y trato de cuidar puntualmente eso
            en cada proyecto que hago. El diseño engloba mucho más que algo estéticamente bonito, la
            usabilidad y la permofance son pilares fundamentales que trato de no dejar de lado,
            haciendo uso de buenas prácticas y de tecnologías actuales a la hora de codear.
          </Text>
        ) : (
          <>
            <Text letterSpacing="-0.003em">
              Comencé a transitar el camino del programador hace más de un año y me vi envuelto en
              un sin fin de trabas y frustraciones que hasta el día de hoy no cesan, pero aprendí
              que todo eso es parte del proceso de aprendizaje y que si bien al principio todo puede
              verse complicado y oscuro, con el paso de el tiempo y la constancia todo comienza a
              ser más simple.
              <br />
              <br />
              <Text fontWeight={'bold'}>Ejkbksjabdsasadsadasdasdasd </Text>
              <br />
              Cada proyecto que realizo es una instancia de aprendizaje en la que voy implementando
              siempre una nueva tecnología. Claro que existen infinidades de estas y a lo largo del
              camino uno va tomando decisiones acerca de el stack con el que va desarrollar. En este
              caso React es mi herramienta predilecta, a la cual le he dedicado muchas horas de
              trabajo. Ahora para que React funcione correctamente necesitamos comprender y
              configurar el ecosistema que lo rodea, establecer el routing de la aplicación, definir
              el styling, adicionar Redux y mucho más, pero esto lo dejo para el apartado de Tools.
              <br />
              <br />
              <Text fontWeight={'bold'}>Ejkbksjabdsasadsadasdasdasd </Text>
              <br />
              Mis primeros proyectos comenzaron teniendo una base de datos simple proporcionada por
              la plataforma de firebase, que brinda facilidad a la hora persister datos y quita la
              complejidad de levantar un servidor. Debía enfocarme en una cosa a la vez. Si en un
              comienzo el front era complicado para mí - html, css, javascript -, sumarle el back
              hubiese sido muy caótico, por lo que firebase fue una opción viable.
              <br />
              <br />
              Más tarde comencé a crear mis propios servidores y a implementar bases de datos SQL y
              NoSQL, lo que me permitió profundizar y entender una gran cantidad conceptos y
              funciones que hasta el momento ignoraba.
              <br />
              <br />
              Actualmente mi stack es simple pero poderoso.
            </Text>
          </>
        )}
      </Stack>{' '}
    </Box>
  )
}

export default Home
