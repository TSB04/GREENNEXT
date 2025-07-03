"use client";

import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import * as React from "react";
import { useEffect, useRef } from "react";
import { HeroSection } from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import FeaturesSection from "./FeaturesSection";
import TeamSection from "./TeamSection";
import RefSection from "./RefSection";
import IotSection from "./IotSection";

const Home: NextPage = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const scrollToNextSection = () => {
    const currentScroll = window.scrollY;
    const nextSection = sectionsRef.current.find(
      (ref) => ref.offsetTop > currentScroll + 10
    );
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        scrollToNextSection();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Box as="main" minH="100vh">
      <Box
        ref={(el) => {
          if (el) sectionsRef.current[0] = el;
        }}
        scrollSnapAlign="start"
      >
        <HeroSection />
      </Box>
      <Box
        ref={(el) => {
          if (el) sectionsRef.current[1] = el;
        }}
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        scrollSnapAlign="start"
      >
        <HighlightsSection />
      </Box>
      <Box
        ref={(el) => {
          if (el) sectionsRef.current[2] = el;
        }}
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        scrollSnapAlign="start"
      >
        <FeaturesSection />
      </Box>

      <Box
        ref={(el) => {
          if (el) sectionsRef.current[3] = el;
        }}
        minH="100vh"
        alignItems="center"
        justifyContent="center"
        scrollSnapAlign="start"
      >
        <TeamSection />
      </Box>

      <Box
        ref={(el) => {
          if (el) sectionsRef.current[4] = el;
        }}
        minH="50vh"
        alignItems="center"
        justifyContent="center"
        scrollSnapAlign="start"
      >
        <IotSection />
      </Box>
      <Box
        ref={(el) => {
          if (el) sectionsRef.current[5] = el;
        }}
        minH="50vh"
        alignItems="center"
        justifyContent="center"
        scrollSnapAlign="start"
      >
        <RefSection />
      </Box>
    </Box>
  );
};

export default Home;
