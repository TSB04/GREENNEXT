import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  useBreakpointValue,
  useToken,
  useColorModeValue,
  Text,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { ButtonLink } from "@/components/button-link/button-link";
import { BackgroundGradient } from "@/components/gradients/background-gradient";
import { FallInPlace } from "@/components/motion/fall-in-place";
import { useDictionary } from "@/hooks/useDictionary";

export const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { dict } = useDictionary();

  const bgColor = useColorModeValue("white", "grenext.background");
  const textColor = useColorModeValue("gray.900", "white");
  const accentColor = useToken("colors", "grenext.teal");
  const magenta = useToken("colors", "grenext.magenta");

  return (
    <Box position="relative" overflow="hidden" bg={bgColor} color={textColor} minH="100vh">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 28 }} pb="40">
        <Flex direction="column" align="center" textAlign="center" mb={150}>
          <FallInPlace>
            <Text
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              color={accentColor}
              maxW="container.md"
            >
              {dict?.home.title}
            </Text>
          </FallInPlace>
        </Flex>

        <Flex direction="column" align="flex-start" textAlign="left" maxW="xl" ml={{ base: 0, md: -10, lg: -40 }} borderRadius={"xl"} >
          <FallInPlace delay={0.4} fontWeight="medium">
            <Text fontSize="3xl" color={"brand.700"} mb={6}>
              {dict?.home.description}
            </Text>
          </FallInPlace>

          <FallInPlace delay={0.8}>
            <HStack pt="4" pb="10" spacing="8" color={magenta}>
              <Text fontSize="sm" fontWeight="semibold">
                #SmartCampus #IoT #Grenext
              </Text>
            </HStack>
            <ButtonGroup spacing={4} alignItems="center">
              <ButtonLink colorScheme="teal" size="lg" href="/signup">
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
        </Flex>
      </Container>

      {!isMobile && (
        <Box
          position="absolute"
          bottom="0"
          right="0"
          width="60%"
          maxW="960px"
          zIndex={0}
        >
          <FallInPlace delay={1}>
            <Box
              overflow="hidden"
              height="100%"
              boxShadow="2xl"
              position="relative"
              borderTopLeftRadius={16}
              borderTopRightRadius={16}
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              borderTop="2px solid"
              borderColor="grenext.teal"
            >
              <Image
              src="/static/screenshots/list.png"
              width={1200}
              height={762}
              alt="GreenNext Smart Campus Dashboard"
              quality={75}
              priority
              style={{
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                width: "100%",
                height: "auto",
              }}
              />
            </Box>
          </FallInPlace>
        </Box>
      )}
    </Box>
  );
};