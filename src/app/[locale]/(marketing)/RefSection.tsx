"use client";

import { Box, Container, Link, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NextjsLogo } from "@/components/logos/next";
import { ChakraLogo } from "@/components/logos/chakra";
import { ReactLogo } from "@/components/logos/react";
import ArduinoLogo from "@/components/logos/arduino";
import Image from "next/image";

type RefItem = {
  id: number;
  title: string;
  link: string;
  logo: ReactNode;
};

const refsData: RefItem[] = [
  {
    id: 1,
    title: "Next.js",
    link: "https://nextjs.org",
    logo: <NextjsLogo height="60px" />,
  },
  {
    id: 2,
    title: "Chakra UI",
    link: "https://chakra-ui.com",
    logo: <ChakraLogo height="60px" />,
  },
  {
    id: 3,
    title: "React",
    link: "https://reactjs.org",
    logo: <ReactLogo height="60px" />,
  },

  {
    id: 4,
    title: "Arduino",
    link: "https://www.arduino.cc",
    logo: <ArduinoLogo height="100px" />,
  },
];

const RefSection = () => {
  const bg = useColorModeValue("gray.300", "gray.800");

  return (
    <Box as="section" py={{ base: 10, md: 16 }}>
      <Box bg={bg} boxShadow="md" w="100%" p={14} justifyItems={"center"}>
        <Image
          src="/static/screenshots/iot.webp"
          alt="IoT Section Image"
          width={800}
          height={600}
          style={{ width: "90%", height: "600px", borderRadius: "8px" }}
        />
      </Box>
      <Container maxW="container.xl" mt={8}>
        <SimpleGrid
          columns={[2, 3, 4, ]}
          spacing={{ base: 6, md: 10 }}
          justifyItems="center"
          alignItems="center"
        >
          {refsData.map((ref) => (
            <Box
              key={ref.id}
              maxW="140px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link
                href={ref.link}
                aria-label={ref.title}
                isExternal
                rel="nofollow noopener"
                _hover={{ opacity: 0.85 }}
              >
                {ref.logo}
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default RefSection;
