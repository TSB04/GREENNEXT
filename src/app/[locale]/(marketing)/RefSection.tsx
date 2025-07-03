"use client";

import { Box, Container, Link, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NextjsLogo } from "@/components/logos/next";
import { ChakraLogo } from "@/components/logos/chakra";
import { ReactLogo } from "@/components/logos/react";

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
    logo: <NextjsLogo height="40px" />,
  },
  {
    id: 2,
    title: "Chakra UI",
    link: "https://chakra-ui.com",
    logo: <ChakraLogo height="40px" />,
  },
  {
    id: 3,
    title: "React",
    link: "https://reactjs.org",
    logo: <ReactLogo height="40px" />,
  },
  // Add more references...
];

const RefSection = () => {
  return (
    <Box as="section" py={{ base: 10, md: 20 }}>
      <Container maxW="container.xl">
        <SimpleGrid
          columns={[2, 3, 4, 5]}
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
              mb={4}
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
