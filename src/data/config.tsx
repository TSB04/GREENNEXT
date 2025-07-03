import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiCpu, FiZap, FiLock, FiSmartphone } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'GreenNext – Smart & Secure Campus',
    description:
      'GreenNext is a smart, secure, and sustainable campus platform enabling smart access, energy optimization, and real-time monitoring through IoT.',
  } as NextSeoProps,

  termsUrl: '/legal/terms',
  privacyUrl: '/legal/privacy',

  header: {
    links: [
      {
        id: 'solutions',
        label: 'Solutions',
      },
      {
        id: 'dashboard',
        label: 'Dashboard',
      },
      {
        id: 'institutes',
        label: 'Institutes',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Get Started',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },

  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} GreenNext. Built with ❤️ by the{' '}
        <Link href="https://greennext.dev" isExternal>
          GreenNext Team
        </Link>
      </>
    ),
    links: [
      {
        href: 'mailto:contact@greennext.dev',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/greennext_io',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/greennext',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://linkedin.com/company/greennext',
        label: <FaLinkedin size="14" />,
      },
    ],
  },

  signup: {
    title: 'Build your Smart Campus with GreenNext',
    features: [
      {
        icon: FiLock,
        title: 'Smart Access Control',
        description: 'Secure doors and zones with RFID/NFC badges and mobile verification.',
      },
      {
        icon: FiZap,
        title: 'Energy Optimization',
        description:
          'Automated lighting and HVAC control to reduce waste and improve sustainability.',
      },
      {
        icon: FiCpu,
        title: 'Modular IoT Architecture',
        description:
          'Plug-and-play sensors, emergency alert systems, weather tracking, and more.',
      },
      {
        icon: FiSmartphone,
        title: 'Mobile & Wi-Fi Connectivity',
        description:
          'Connect to real-time dashboards, student ID apps, and alerts via mobile devices.',
      },
    ],
  },
  
}

export default siteConfig
