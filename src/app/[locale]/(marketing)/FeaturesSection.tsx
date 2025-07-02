"use client";

import { Heading } from "@chakra-ui/react";
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

const FeaturesSection = () => {
  const { dict } = useDictionary();

  return (
    <Features
      id="features"
      title={
        <Heading fontSize={["2xl", null, "4xl"]} lineHeight="short" textAlign="left" as="p">
          {dict?.features?.title}
        </Heading>
      }
      description={
        <>
          {dict?.features?.description ||
            "Everything you need to digitize and secure your campus, from classrooms to climate sensors."}
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: dict?.features?.accessControl || "Smart Access Control",
          icon: FiLock,
          description:
            dict?.features?.accessControlDesc ||
            "Use RFID and servo-motor systems to secure entry points with timestamped logs.",
          variant: "inline",
        },
        {
          title: dict?.features?.attendance || "Automated Attendance",
          icon: FiUserPlus,
          description:
            dict?.features?.attendanceDesc ||
            "Log student presence passively via Wi-Fi or actively with RFID cards.",
          variant: "inline",
        },
        {
          title: dict?.features?.energy || "Energy Optimization",
          icon: FiTrendingUp,
          description:
            dict?.features?.energyDesc ||
            "Use PIR and LDR sensors to reduce energy waste in classrooms automatically.",
          variant: "inline",
        },
        {
          title: dict?.features?.weather || "Weather Monitoring",
          icon: FiCloud,
          description:
            dict?.features?.weatherDesc ||
            "Track temperature, humidity, and rainfall using DHT and rain sensors.",
          variant: "inline",
        },
        {
          title: dict?.features?.dashboard || "Dashboard Integration",
          icon: FiGrid,
          description:
            dict?.features?.dashboardDesc ||
            "Manage and monitor all campus devices from a central interface.",
          variant: "inline",
        },
        {
          title: dict?.features?.modes || "Offline & Network Modes",
          icon: FiToggleLeft,
          description:
            dict?.features?.modesDesc ||
            "Operate with SD card logging or sync with cloud via ESP8266 modules.",
          variant: "inline",
        },
      ]}
    />
  );
};

export default FeaturesSection;