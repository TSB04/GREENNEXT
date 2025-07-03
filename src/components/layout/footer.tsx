'use client'

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image as ChakraImage,
} from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import NextLink from 'next/link'

const footerLinks = {
  solutions: ['Smart Access', 'Energy Optimization', 'Weather Monitoring', 'Emergency Alerts'],
  platform: ['How it Works', 'Dashboard', 'Mobile App', 'API Access'],
  resources: ['FAQ', 'Blog', 'Support', 'Developers'],
  legal: ['Privacy Policy', 'Terms of Service', 'Legal Notice'],
}

const Footer = () => {
  const bg = useColorModeValue('gray.700', '#090E34')
  const textColor = useColorModeValue('gray.200', 'gray.400')
  const linkHover = useColorModeValue('teal.400', 'white')

  return (
    <Box as="footer" bg={bg} pt="20" position="relative" zIndex="10">
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 2, 3, 5]} spacing={10}>
          {/* Branding */}
          <Stack spacing={6}>
            <Link as={NextLink} href="/" _hover={{ opacity: 0.8 }}>
              <ChakraImage
                src="/static/svg/file.svg"
                alt="GreenNext Logo"
                maxW="60px"
              />
            </Link>
            <Text color={textColor} maxW="270px" fontSize="sm">
              GreenNext empowers smart, secure, and sustainable campuses worldwide.
            </Text>
            <HStack spacing={4}>
              <SocialIcon label="Facebook" icon={FaFacebook} href="#" />
              <SocialIcon label="Twitter" icon={FaTwitter} href="https://twitter.com/greennext_io" />
              <SocialIcon label="Instagram" icon={FaInstagram} href="#" />
              <SocialIcon label="LinkedIn" icon={FaLinkedin} href="https://linkedin.com/company/greennext" />
            </HStack>
          </Stack>

          {/* Sections */}
          <FooterSection title="Solutions" links={footerLinks.solutions} />
          <FooterSection title="Platform" links={footerLinks.platform} />
          <FooterSection title="Resources" links={footerLinks.resources} />
          <FooterSection title="Legal" links={footerLinks.legal} />
        </SimpleGrid>

        {/* Divider + Bottom Bar */}
        <Box
          borderTop="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          mt="12"
          pt="8"
        >
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
              {footerLinks.legal.map((label) => (
                <FooterLegalLink key={label} href="#">
                  {label}
                </FooterLegalLink>
              ))}
            </HStack>
            <Flex justify={{ base: 'center', md: 'flex-end' }} align="center">
              <Text color={textColor} fontSize="sm">
                Designed and developed by{' '}
                <Link
                  href="https://greennext.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={linkHover}
                  fontWeight="semibold"
                  _hover={{ textDecoration: 'underline' }}
                >
                  GreenNext Team
                </Link>
              </Text>
            </Flex>
          </SimpleGrid>
        </Box>

        {/* Decorative Backgrounds */}
        <Box
          position="absolute"
          top="0"
          left="0"
          zIndex={-1}
          maxW="570px"
          w="full"
          display={{ base: 'none', lg: 'block' }}
        >
          <ChakraImage src="/static/svg/shape-1.svg" alt="shape" />
        </Box>

        <Box
          position="absolute"
          bottom="0"
          right="0"
          zIndex={-1}
          maxW="372px"
          w="full"
          display={{ base: 'none', lg: 'block' }}
        >
          <ChakraImage src="/static/svg/shape-3.svg" alt="shape" />
        </Box>
      </Container>
    </Box>
  )
}

interface SectionProps {
  title: string
  links: string[]
}

const FooterSection = ({ title, links }: SectionProps) => {
  const textColor = useColorModeValue('gray.200', 'gray.400')
  const hoverColor = useColorModeValue('teal.400', 'white')
  return (
    <Stack spacing={3}>
      <Text fontWeight="semibold" fontSize="lg" color="white">
        {title}
      </Text>
      {links.map((label) => (
        <Link
          key={label}
          href="#"
          color={textColor}
          fontSize="sm"
          _hover={{ color: hoverColor }}
        >
          {label}
        </Link>
      ))}
    </Stack>
  )
}

const FooterLegalLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const color = useColorModeValue('gray.500', 'gray.400')
  const hoverColor = useColorModeValue('teal.400', 'white')
  return (
    <Link href={href} color={color} fontSize="sm" _hover={{ color: hoverColor, textDecoration: 'underline' }}>
      {children}
    </Link>
  )
}

const SocialIcon = ({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType
  href: string
  label: string
}) => {
  const color = useColorModeValue('gray.300', 'gray.400')
  const hoverColor = useColorModeValue('teal.400', 'white')

  return (
    <Link
      href={href}
      aria-label={label}
      isExternal
      color={color}
      _hover={{ color: hoverColor }}
      fontSize="lg"
    >
      <Icon />
    </Link>
  )
}

export default Footer
