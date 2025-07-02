"use client";

import { Box } from "@chakra-ui/react";
import type { Metadata, NextPage } from "next";
import * as React from "react";
import { HeroSection } from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import FeaturesSection from "./FeaturesSection";

export const meta: Metadata = {
  title: "GRENEXT | Smart & Secure Campus Platform",
  description:
    "A smart campus platform for managing attendance, energy efficiency, and environmental monitoring. Designed for modern institutions like ESTIAM.",
};

const Home: NextPage = () => {
  return (
    <Box as="main" bg="bg.default" minH="100vh">
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
    </Box>
  );
};

export default Home;
