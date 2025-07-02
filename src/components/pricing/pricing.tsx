import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'
import React from 'react'

import {
  ButtonLink,
  ButtonLinkProps,
} from '@/components/button-link/button-link'
import { BackgroundGradient } from '@/components/gradients/background-gradient'
import { Section, SectionProps, SectionTitle } from '@/components/section'

export interface PricingPlan {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  features: Array<PricingFeatureProps | null>
  action?: ButtonLinkProps & { label?: string }
  isRecommended?: boolean
}

export interface PricingProps extends SectionProps {
  description: React.ReactNode
  plans: Array<PricingPlan>
}

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative">
        <SectionTitle
          title={title || 'Flexible Pricing for Smart Campuses'}
          description={
            description ||
            'Adapt your subscription to your infrastructure size. GRENEXT supports both small schools and university networks.'
          }
        />

        <SimpleGrid columns={[1, null, 3]} spacing={6} pt={6}>
          {plans?.map((plan) => (
            <PricingBox
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              sx={
                plan.isRecommended
                  ? {
                      borderColor: 'primary.500',
                      _dark: {
                        borderColor: 'primary.500',
                        bg: 'blackAlpha.400',
                      },
                    }
                  : {}
              }
            >
              <PricingFeatures>
                {plan.features.map((feature, i) =>
                  feature ? (
                    <PricingFeature key={i} {...feature} />
                  ) : (
                    <br key={i} />
                  )
                )}
              </PricingFeatures>
              {plan.action && (
                <ButtonLink
                  colorScheme="primary"
                  variant={plan.isRecommended ? 'solid' : 'outline'}
                  {...plan.action}
                >
                  {plan.action.label || 'Choose Plan'}
                </ButtonLink>
              )}
            </PricingBox>
          ))}
        </SimpleGrid>

        {children}
      </Box>
    </Section>
  )
}

const PricingFeatures: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <VStack align="stretch" justifyContent="stretch" spacing={4} mb={8} flex="1">
      {children}
    </VStack>
  )
}

export interface PricingFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ title, iconColor = 'primary.500' }) => (
  <HStack>
    <Icon as={FiCheck} color={iconColor} />
    <Text flex="1" fontSize="sm">
      {title}
    </Text>
  </HStack>
)

export interface PricingBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
}

const PricingBox: React.FC<PricingBoxProps> = ({ title, description, price, children, ...rest }) => {
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.700"
      borderRadius="md"
      p={8}
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor="gray.300"
      _dark={{
        bg: 'blackAlpha.300',
        borderColor: 'gray.700',
      }}
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: 'scale(1.01)',
        shadow: 'lg',
      }}
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb={2} color="primary.600">
        {title}
      </Heading>
      <Box color="muted" fontSize="sm" pb={2}>
        {description}
      </Box>
      <Box fontSize="2xl" fontWeight="bold" py={4} color="primary.500">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing={4} flex="1">
        {children}
      </VStack>
    </VStack>
  )
}