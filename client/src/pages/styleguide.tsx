import {
  Box,
  Button,
  Checkbox,
  Container,
  Heading,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import Head from 'next/head'

export default function StyleGuide() {
  return (
    <div>
      <Head>
        <title>Styleguide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="100%" h="100%" p={4} bg="black">
        <Container maxW="container.lg">
          <Box w="70%" p={4}>
            <Heading as="h1" size="lg" color="brand.500">
              StyleGuide
            </Heading>

            <Box py={4}>
              <Heading as="h3" size="md" color="brand.500">
                Buttons
              </Heading>
              <Button variant="solid" m={4}>
                Primary Button
              </Button>
              <Button variant="outline" m={4}>
                Secondary Button
              </Button>
            </Box>
          </Box>
          <Box py={4}>
            <Heading as="h3" size="md" color="brand.500">
              Input Box
            </Heading>
            <Input
              size="sm"
              placeholder="Email"
              variant="outline"
              colorScheme="white"
              color="white"
            />
          </Box>
          <Box py={4}>
            <Heading as="h3" size="md" color="brand.500">
              Card
            </Heading>
            <Box bg="black.800" boxSize="sm"></Box>
          </Box>
          <Box py={4}>
            <Heading as="h3" size="md" color="brand.500">
              Breadcrumb
            </Heading>
            <Breadcrumb fontWeight="medium" fontSize="sm" color="black.400">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Current</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box py={4}>
            <Heading as="h3" size="md" color="brand.500">
              Checkbox
            </Heading>
            {/* <Checkbox colorScheme="brand" textColor="white">
              This is a checkbox
            </Checkbox> */}
            <Checkbox>This is a checkbox</Checkbox>
          </Box>
        </Container>
      </Box>
    </div>
  )
}