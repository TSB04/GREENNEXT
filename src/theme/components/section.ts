const Section = {
  baseStyle: {
    pt: 28,
    pb: 28,
    px: [4, null],
  },
  variants: {
    subtle: {},
    solid: {
      bg: 'primary.400',
    },
    alternate: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
      bg: colorMode === 'dark' ? 'gray.800' : 'gray.50',
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default Section
