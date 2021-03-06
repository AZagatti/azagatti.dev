import { Box, Divider, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { GithubIcon } from './icons/github'
import { LinkedinIcon } from './icons/linkedin'
import { TwitterIcon } from './icons/twitter'

export const Footer = () => {
  return (
    <>
      <Divider orientation="horizontal" my="8" />
      <Flex w="100%" align="center" justify="center">
        <Box maxW="6xl" px="8" flex="1">
          <Flex gap="8" justify="space-between">
            <Box>
              <Heading as="h4" size="md" mb="8">
                André Zagatti
              </Heading>
              <Text fontSize="lg">
                Frontend Software Engineering, specializing in mobile with React
                Native
              </Text>
            </Box>
            <Flex align="start">
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/azagatti"
                ml="8"
                fontSize="24"
                style={{ textDecoration: 'none' }}
              >
                <GithubIcon />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/andre-zagatti/"
                ml="8"
                fontSize="24"
                style={{ textDecoration: 'none' }}
              >
                <LinkedinIcon />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/andre-zagatti/"
                ml="8"
                fontSize="24"
                style={{ textDecoration: 'none' }}
              >
                <TwitterIcon />
              </Link>
            </Flex>
          </Flex>
          <Text fontSize="md" mt="24" mb="8">
            © {new Date().getFullYear()}, André Zagatti
          </Text>
        </Box>
      </Flex>
    </>
  )
}
