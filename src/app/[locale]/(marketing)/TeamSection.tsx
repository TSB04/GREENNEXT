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

const TeamSection = () => (
  
  />
);

export default TeamSection
