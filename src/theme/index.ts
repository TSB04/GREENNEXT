import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/inter';
import { theme as baseTheme } from '@saas-ui/react';

import components from './components';
import { fontSizes } from './foundations/typography';

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: import('@chakra-ui/theme-tools').GlobalStyleProps) => ({
        body: {
          fontSize: 'lg',
          color: props.colorMode === 'dark' ? 'gray.100' : 'gray.900',
          bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
          lineHeight: 'base',
          letterSpacing: 'tight',
          transition: 'background 0.3s ease',
        },
        '::selection': {
          backgroundColor: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
          color: 'white',
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    colors: {
      brand: {
        50: '#E6FFFA',
        100: '#B2F5EA',
        200: '#81E6D9',
        300: '#4FD1C5',
        400: '#38B2AC',
        500: '#319795',
        600: '#2C7A7B',
        700: '#285E61',
        800: '#234E52',
        900: '#1D4044',
      },
      grenext: {
        teal: '#1CC5DC',
        gold: '#FFB703',
        magenta: '#EF476F',
        background: '#0A0E17',
        surface: '#111827',
        accent: '#00A896',
      },
    },
    fontSizes,
    components,
    shadows: {
      outline: '0 0 0 3px rgba(28, 197, 220, 0.6)',
    },
    radii: {
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
  },
  baseTheme,
);
