"use client";

import { Box, Flex, Tag, Text, Tooltip, VStack, Wrap } from "@chakra-ui/react";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "@/components/highlights";
import { useDictionary } from "@/hooks/useDictionary";

const HighlightsSection = () => {
  const { dict } = useDictionary();

  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title={dict?.highlights?.iotModulesTitle || "IoT Modules Ready"}
      >
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
                {dict?.highlights?.message}
              </Text>{" "}
              <Text as="span" color="cyan.300">
                {dict?.highlights?.messageAccent}
              </Text>
            </Box>
          </Flex>
        </VStack>
      </HighlightsItem>

      <HighlightsItem
        title={
          dict?.highlights?.educationReadyTitle || "Designed for Education"
        }
      >
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

      <HighlightsItem
        colSpan={[1, null, 2]}
        title={dict?.highlights?.platformTitle || "All-in-One Campus Control"}
      >
        <Text color="muted" fontSize="lg">
          {dict?.highlights?.platformDescription ||
            "Centralize access logs, energy reports, climate data, and attendance metrics with one intuitive platform."}
        </Text>
        <Wrap mt="8">
          {Object.entries(dict?.solutions || {}).map(([key, solution]) => (
            <Tooltip
              key={key}
              label={solution.description}
              hasArrow
              bg="purple.700"
              color="white"
              fontSize="sm"
              px="4"
              py="2"
              borderRadius="md"
              boxShadow="lg"
              openDelay={300}
            >
              <Tag
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
                cursor="pointer"
              >
                {solution.label}
              </Tag>
            </Tooltip>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

export default HighlightsSection;
