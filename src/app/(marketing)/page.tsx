"use client";

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from "@chakra-ui/react";
import { Br, Link } from "@saas-ui/react";
import type { Metadata, NextPage } from "next";
import Image from "next/image";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";

import * as React from "react";

import { ButtonLink } from "@/components/button-link/button-link";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { BackgroundGradient } from "@/components/gradients/background-gradient";
import { Hero } from "@/components/hero";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "@/components/highlights";
import { ChakraLogo, NextjsLogo } from "@/components/logos";
import { FallInPlace } from "@/components/motion/fall-in-place";
import { Pricing } from "@/components/pricing/pricing";
import { Testimonial, Testimonials } from "@/components/testimonials";
import { Em } from "@/components/typography";
import faq from "@/data/faq";
import pricing from "@/data/pricing";
import testimonials from "@/data/testimonials";

export const meta: Metadata = {
  title: "GRENEXT | Smart & Secure Campus Platform",
  description:
    "A smart campus platform for managing attendance, energy efficiency, and environmental monitoring. Designed for modern institutions like ESTIAM.",
};

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Welcome to
                <Br /> GRENEXT Campus
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                A modular and smart campus solution built with modern tech.
                <Br /> Automate attendance, monitor environments, and optimize
                energy usage.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Get Started
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/dashboard"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Explore Dashboard
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of GRENEXT student dashboard"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Campus-Ready Components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started with prebuilt modules: attendance tracking via Wi-Fi,
            smart classrooms with Arduino, and weather-aware dashboards.
          </Text>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Built for Education">
        <Text color="muted" fontSize="lg">
          GRENEXT is tailored for universities and tech campuses like ESTIAM,
          offering flexible integrations, bilingual UI, and energy-saving logic.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “With GRENEXT, our institute gained real-time insight into energy usage
        and student presence. It&apos;s efficient, scalable, and modern.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Automate and Optimize Campus Life"
      >
        <Text color="muted" fontSize="lg">
          From smart lighting to environmental alerts and attendance logs synced
          with student Wi-Fi activity, GRENEXT is your all-in-one campus control
          panel.
        </Text>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => (
  <Features
    id="features"
    title={
      <Heading
        lineHeight="short"
        fontSize={["2xl", null, "4xl"]}
        textAlign="left"
        as="p"
      >
        All Modules, One System
      </Heading>
    }
    description={
      <>
        GRENEXT is a modular framework that enables your campus to plug into
        attendance, automation, energy intelligence, and live weather detection.
      </>
    }
    align="left"
    columns={[1, 2, 3]}
    iconSize={4}
    features={[
      {
        title: "Smart Attendance",
        icon: FiSmile,
        description:
          "Passive Wi-Fi detection, MAC-based logging, and fraud-resistant student presence validation.",
        variant: "inline",
      },
      {
        title: "Energy Control",
        icon: FiSliders,
        description:
          "PIR sensors and light detectors automate classroom appliances, reducing waste.",
        variant: "inline",
      },
      {
        title: "Environmental Monitoring",
        icon: FiSearch,
        description:
          "Temperature, humidity, and rainfall sensors log real-time weather data to SD or dashboard.",
        variant: "inline",
      },
      {
        title: "Modular Arduino Kits",
        icon: FiBox,
        description:
          "Each classroom setup uses plug-and-play Arduino components including UNO R3, LDR, PIR, RTC, SD Card Module.",
        variant: "inline",
      },
      {
        title: "Live Dashboard",
        icon: FiGrid,
        description:
          "Track student status, environment conditions, and device activity across campus.",
        variant: "inline",
      },
      {
        title: "Offline + Online Sync",
        icon: FiToggleLeft,
        description:
          "Records saved to SD in case of Wi-Fi issues, with sync features for cloud dashboards.",
        variant: "inline",
      },
    ]}
  />
);

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      name: "Sophie Leroux",
      description: "Program Coordinator",
      avatar: "/static/images/avatar.jpg",
      quote:
        "With GRENEXT, we save hours weekly on manual attendance. The sensors and insights are revolutionary.",
    },
    {
      name: "Thomas Bernard",
      description: "Campus Director",
      avatar: "/static/images/avatar.jpg",
      quote:
        "Our energy bills dropped significantly after deploying smart classrooms. It's a game-changer.",
    },
    {
      name: "Naima Fall",
      description: "IoT Professor",
      avatar: "/static/images/avatar.jpg",
      quote:
        "I use GRENEXT in class to teach real-time systems. It brings hardware and software together beautifully.",
    },
  ];

  return (
    <Testimonials
      title="What ESTIAM Leaders Say"
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {testimonialsData.map((t, i) => (
          <Stack key={i} spacing="8">
            <Testimonial {...t} />
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => (
  <Pricing
    title="Flexible Pricing for Schools"
    description="Whether you're a single campus or nationwide, we provide affordable, scalable plans."
    plans={[
      {
        name: "Starter Campus",
        price: "Free",
        features: ["1 Building Setup", "Basic Dashboard", "Offline Logging"],
      },
      {
        name: "Smart Campus",
        price: "$99/mo",
        features: [
          "Live Attendance",
          "Energy Optimization",
          "Online Sync",
          "Weather Station",
        ],
      },
      {
        name: "Enterprise Campus",
        price: "Contact Us",
        features: ["Custom Sensors", "Multi-campus Support", "Dedicated Setup"],
      },
    ]}
  >
    <Text p="8" textAlign="center" color="muted">
      Special pricing available for public institutions.
    </Text>
  </Pricing>
);

const TeamSection = () => (
  <Faq
    title="Frequently Asked Questions"
    items={[
      {
        question: "Can GRENEXT run offline?",
        answer:
          "Yes, it stores data on SD cards and syncs once connected. Perfect for unstable Wi-Fi zones.",
      },
      {
        question: "Is the system bilingual?",
        answer:
          "Yes. English and French interfaces are available and easily extendable to other languages.",
      },
      {
        question: "How do we integrate it into our campus?",
        answer:
          "GRENEXT modules are plug-and-play with Arduino. Our team assists with deployment and training.",
      },
    ]}
  />
);

export default Home;
