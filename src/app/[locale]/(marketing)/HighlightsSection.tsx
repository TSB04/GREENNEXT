"use client";

import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  useClipboard,
} from "@chakra-ui/react";
import { FiCheck, FiCopy } from "react-icons/fi";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "@/components/highlights";
import { useDictionary } from "@/hooks/useDictionary";

const HighlightsSection = () => {
  const { dict } = useDictionary();
  const { onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title={dict?.highlights?.iotModulesTitle || "IoT Modules Ready"}>
        <VStack align="flex-start" spacing={6}>
          <Text color="muted" fontSize="lg">
            {dict?.highlights?.iotModulesDescription ||
              "Leverage modular Arduino systems — from smart doors and energy-saving lights to RFID check-ins and weather reporting."}
          </Text>
          <Flex
            rounded="full"
            borderWidth="1px"
            align="center"
            py="1"
            px="6"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text as="span" color="yellow.400">
                yarn add
              </Text>{" "}
              <Text as="span" color="cyan.300">
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

      <HighlightsItem title={dict?.highlights?.educationReadyTitle || "Designed for Education"}>
        <Text color="muted" fontSize="lg">
          {dict?.highlights?.educationReadyDescription ||
            "GRENEXT is made for schools, universities, and learning centers — bilingual, scalable, and energy smart."}
        </Text>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder, EduSmart Africa"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        {dict?.highlights?.testimonial ||
          "With GRENEXT, our institute automated daily routines, reduced electricity costs, and got full visibility into student flow — all from one dashboard."}
      </HighlightsTestimonialItem>

      <HighlightsItem colSpan={[1, null, 2]} title={dict?.highlights?.platformTitle || "All-in-One Campus Control"}>
        <Text color="muted" fontSize="lg">
          {dict?.highlights?.platformDescription ||
            "Centralize access logs, energy reports, climate data, and attendance metrics with one intuitive platform."}
        </Text>
      </HighlightsItem>
    </Highlights>
  );
};

export default HighlightsSection;
