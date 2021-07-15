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
          <Box p={[4, 5, 6]} pt={[8, 8, 32]} pb={8}>
            <Heading as="h1" size="xl" color={'white'} letterSpacing="tighter">
              Have any issue with the platform?
            </Heading>
          </Box>
          <Flex flexDir="column" p={[4, 5, 6]}>
            <Text color={'gray.400'} fontSize="xl" fontWeight="medium">
              Contact us at :
            </Text>
            <Heading
              as="h1"
              fontSize={['xl', '2xl', '4xl']}
              py={[4, 2, 0]}
              color={'brand.500'}
              letterSpacing="tighter"
            >
              <a href="mailto:contact.neogcamp@gmail.com">
                contact.neogcamp@gmail.com
              </a>
            </Heading>
            <Text fontSize="lg" color={'gray.400'} mt={2}>
              It’s the <strong>BEST WAY </strong>to reach us quickly. <br />
              Queries will be resolved within{' '}
              <strong>3 - 5 working days.</strong>
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
