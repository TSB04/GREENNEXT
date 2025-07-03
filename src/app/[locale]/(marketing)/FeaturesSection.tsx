"use client";

import { Heading, Box, Flex } from "@chakra-ui/react";
import { Features } from "@/components/features";
import {
  FiLock,
  FiUserPlus,
  FiTrendingUp,
  FiCloud,
  FiGrid,
  FiToggleLeft,
} from "react-icons/fi";
import { useDictionary } from "@/hooks/useDictionary";
import React from "react";

const featureItems = [
  {
    key: "accessControl",
    Icon: FiLock,
    defaultTitle: "Smart Access Control",
    defaultDesc: "Use RFID and servo-motor systems to secure entry points with timestamped logs.",
  },
  {
    key: "attendance",
    Icon: FiUserPlus,
    defaultTitle: "Automated Attendance",
    defaultDesc: "Log student presence passively via Wi-Fi or actively with RFID cards.",
  },
  {
    key: "energy",
    Icon: FiTrendingUp,
    defaultTitle: "Energy Optimization",
    defaultDesc: "Use PIR and LDR sensors to reduce energy waste in classrooms automatically.",
  },
  {
    key: "weather",
    Icon: FiCloud,
    defaultTitle: "Weather Monitoring",
    defaultDesc: "Track temperature, humidity, and rainfall using DHT and rain sensors.",
  },
  {
    key: "dashboard",
    Icon: FiGrid,
    defaultTitle: "Dashboard Integration",
    defaultDesc: "Manage and monitor all campus devices from a central interface.",
  },
  {
    key: "modes",
    Icon: FiToggleLeft,
    defaultTitle: "Offline & Network Modes",
    defaultDesc: "Operate with SD card logging or sync with cloud via ESP8266 modules.",
  },
];

const FeaturesSection = () => {
  const { dict } = useDictionary();
  const featuresDict: Record<string, string> = dict?.features || {};

  return (
    <Features
      id="features"
      title={
        <Heading fontSize={["2xl", null, "4xl"]} lineHeight="short" textAlign="left" as="p">
          {featuresDict.title || "Smart & Secure Features"}
        </Heading>
      }
      description={
        featuresDict.description ||
        "Everything you need to digitize and secure your campus, from classrooms to climate sensors."
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={featureItems.map(({ key, Icon, defaultTitle, defaultDesc }) => ({
        title: featuresDict[key] || defaultTitle,
        description: featuresDict[`${key}Desc`] || defaultDesc,
        variant: "inline",
        icon: (
          <Box position="relative" zIndex="10" mb="8" role="group">
            <Flex
              h="70px"
              w="70px"
              align="center"
              justify="center"
              borderRadius="2xl"
              bg="brand.500"
              position="relative"
              zIndex="10"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                h="70px"
                w="70px"
                borderRadius="2xl"
                bg="brand.700"
                opacity={0.2}
                transform="rotate(25deg)"
                transition="all 0.3s"
                _groupHover={{ transform: "rotate(45deg)" }}
                zIndex="-1"
              />
              <Icon size={24} color="white" />
            </Flex>
          </Box>
        ),
      }))}
    />
  );
};

export default FeaturesSection;
