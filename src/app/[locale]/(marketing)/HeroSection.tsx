import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Hero } from "@/components/hero";
import { ButtonLink } from "@/components/button-link/button-link";
import { BackgroundGradient } from "@/components/gradients/background-gradient";
import { FallInPlace } from "@/components/motion/fall-in-place";
import { NextjsLogo, ChakraLogo } from "@/components/logos";
import { useDictionary } from "@/hooks/useDictionary";

export const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { dict } = useDictionary();

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 32, lg: 48 }} pb="40">
        <Stack
          direction={{ base: "column", lg: "row" }}
          align="center"
          spacing={12}
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={<FallInPlace>{dict?.home.title}</FallInPlace>}
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                {dict?.home.description}
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="10" spacing="8">
                <NextjsLogo height="28px" />
                <ChakraLogo height="20px" />
              </HStack>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  {dict?.home.cta}
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/dashboard"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      transition="all 0.2s ease"
                      _groupHover={{ transform: "translateX(5px)" }}
                    />
                  }
                >
                  {dict?.nav.dashboard}
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>

          {!isMobile && (
            <Box
              height="600px"
              position="absolute"
              left={{ lg: "60%", xl: "55%" }}
              width="80vw"
              maxW="1100px"
              margin="0 auto"
              zIndex={0}
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%">
                  <Image
                    src="/static/screenshots/list.png"
                    width={1200}
                    height={762}
                    alt="GreenNext Smart Campus Dashboard"
                    quality={75}
                    priority
                  />
                </Box>
              </FallInPlace>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
};