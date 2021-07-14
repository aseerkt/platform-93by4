import { Box, Button, Heading, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Layout } from '../components'
import illustration from '../images/illustration-contactt.svg'
import NextLink from 'next/link'

export default function Contact() {
  return (
    <Layout>
      <Flex mt={8} flexDir={['column-reverse', 'column-reverse', 'row']}>
        <Flex flexDir="column" justifyContent="space-between">
          <Box p={[4, 5, 6]} pt={4}>
            <Heading as="h1" size="xl" color={'white'} letterSpacing="tighter">
              Have any queries / issues while subbmitting your portfolio ?
            </Heading>
          </Box>
          <Flex flexDir="column" p={[4, 5, 6]}>
            <Text color={'gray.400'} fontSize="xl" fontWeight="medium">
              Mail us at :
            </Text>
            <Heading
              as="h1"
              size="xl"
              color={'brand.500'}
              fontWeight="extrabold"
              letterSpacing="tighter"
            >
              <a href="mailto:neog@gmail.com">neog@gmail.com</a>
            </Heading>
            <Text fontSize="lg" color={'gray.400'} mt={2}>
              Queries will be resolved within 3 - 5 working days.
            </Text>
          </Flex>
          <Box p={[4, 5, 6]}>
            <NextLink href="/dashboard">
              <Button
                size="lg"
                bg="black.900"
                color="brand.500"
                _hover={{ bg: 'black.800' }}
                height="14"
                px="8"
                shadow="base"
                border="2px"
                borderColor="brand.500"
              >
                Go back to dashboard
              </Button>
            </NextLink>
          </Box>
        </Flex>
        <Flex justifyContent="center" mx={['4rem', ' 4rem', '3rem']}>
          <Image src={illustration} />
        </Flex>
      </Flex>
    </Layout>
  )
}
