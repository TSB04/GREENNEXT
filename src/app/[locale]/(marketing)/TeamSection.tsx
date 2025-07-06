"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";

type TeamType = {
  id: number;
  name: string;
  designation: string; // Spécialité
  role?: "Chef" | "Second" | "Membre";
  image?: string;
  githubLink?: string;
  linkedinLink?: string;
};

const defaultAvatar = "/static/images/avatar.png"; // Default avatar image

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Thierno Sadou Barry",
    designation: "WMD",
    role: "Chef",
    image: "/static/images/tsb.jpeg",
    linkedinLink: "https://www.linkedin.com/in/tsb04/",
    githubLink: "https://github.com/tsb04/",
  },
  {
    id: 2,
    name: "Mirke Vianel Kong Sakeo",
    designation: "BDAI",
    role: "Second",
    image: "/static/images/vk.JPG",
    linkedinLink:
      "https://www.linkedin.com/in/mirke-vianel-kong-sakeo-8b0a1b1b2/",
    githubLink: "https://github.com/vianelk/",
  },
  {
    id: 3,
    name: "Arthur Deumeni Tsako",
    designation: "WMD",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/arthur-deumeni-tsako-8b0a1b1b2/",
    githubLink: "https://github.com/ArthurTsako/",
  },
  {
    id: 4,
    name: "Aymen Chahed",
    designation: "DAD",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/aymen-chahed-8b0a1b1b2/",
    githubLink: "https://github.com/AymenChahed/",

  },
  {
    id: 5,
    name: "Cédric Ngounou Mekouontchou",
    designation: "CCSN",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/cedric-ngounou-mekouontchou-8b0a1b1b2/",
    githubLink: "https://github.com/CedricNgounou/",
  },
  {
    id: 6,
    name: "Ewa Christelle Zobieu",
    designation: "DAD",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/ewa-christelle-zobieu-8b0a1b1b2/",
    githubLink: "https://github.com/EwaZobieu/",

  },
  {
    id: 7,
    name: "Franklin Zongmo",
    designation: "BDAI",
    role: "Membre",
    image: "/static/images/abel.jpeg",
    linkedinLink: "https://www.linkedin.com/in/franklin-zongmo-8b0a1b1b2/",
    githubLink: "https://github.com/FranklinZongmo/",
  },
  {
    id: 8,
    name: "Franklin Julien Nzokwui Kamani",
    designation: "CCSN",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/franklin-julien-nzokwui-kamani-8b0a1b1b2/",
    githubLink: "https://github.com/FranklinKamani/",

  },
  {
    id: 9,
    name: "Kondossou Grace Schemaria Yao",
    designation: "DAD",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/kondossou-grace-schemaria-yao-8b0a1b1b2/",
    githubLink: "https://github.com/KondossouGrace/",
  },
  {
    id: 10,
    name: "Larissa Yamdjeu Youmbissie",
    designation: "BDAI",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/larissa-yamdjeu-youmbissie-8b0a1b1b2/",
    githubLink: "https://github.com/LarissaYamdjeu/",

  },
  {
    id: 11,
    name: "Rhodesine Donlefack",
    designation: "BDAI",
    role: "Membre",
    linkedinLink: "https://www.linkedin.com/in/rhodesine-donlefack-8b0a1b1b2/",
    githubLink: "https://github.com/RhodesineDonlefack/",
  },
];

const TeamCard = ({ team }: { team: TeamType }) => {
  const { image, name, designation, role, githubLink, linkedinLink } = team;

  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const subTextColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Flex
      bg={bg}
      borderRadius="lg"
      boxShadow="md"
      p={4}
      align="center"
      gap={4}
      w="100%"
      maxW="400px"
      _hover={{ boxShadow: "lg" }}
      transition="all 0.3s"
    >
      {/* Avatar */}
      <Box
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        flexShrink={0}
      >
        <Image
          src={image || defaultAvatar}
          alt={name}
          boxSize="100px"
          width="100px"
          height="120px"
          objectFit="cover"
        />
      </Box>

      {/* Info */}
      <Box flex="1">
        <Heading fontSize="md" mb={1} color={textColor}>
          {name}
        </Heading>
        <Text fontSize="sm" color={subTextColor}>
          {designation}
          {role ? ` · ${role}` : ""}
        </Text>
        <HStack spacing={2} justify="center" mt={4}>
          {githubLink && (
            <IconButton
              as="a"
              href={githubLink}
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              size="sm"
              isRound
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
          {linkedinLink && (
            <IconButton
              as="a"
              href={linkedinLink}
              aria-label="LinkedIn"
              icon={<FaLinkedinIn />}
              variant="ghost"
              size="sm"
              isRound
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        </HStack>
      </Box>
    </Flex>
  );
};

const TeamSection = () => {
  const leaders = teamData.filter(
    (t) => t.role === "Chef" || t.role === "Second"
  );
  const membres = teamData.filter((t) => t.role === "Membre");
  // Split membres list
  const topMembres = membres.slice(0, membres.length - 5);
  const lastMembresRow = membres.slice(-5);

  return (
    <Box
      as="section"
      height="105vh"
      width="100vw"
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
      overflowY="auto"
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        height="99%"
        py={8}
      >
        <Container maxW="full" textAlign="center" mb={12}>
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="primary.500"
            textTransform="uppercase"
          >
            Notre équipe
          </Text>
          <Heading fontSize={["2xl", "3xl", "4xl"]} mt={2}>
            Découvrez notre équipe
          </Heading>
          <Text
            maxW="740px"
            mx="auto"
            mt={4}
            color="gray.600"
            _dark={{ color: "gray.300" }}
          >
            Des chefs aux développeurs, chaque niveau apporte une force unique à
            notre succès collectif.
          </Text>
        </Container>

        <Stack spacing={12} align="center" w="full" px={10}>
          {/* First row: Chef & Second */}
          <SimpleGrid columns={[1, 2]} spacing={6} justifyItems="center">
            {leaders.map((member) => (
              <TeamCard key={member.id} team={member} />
            ))}
          </SimpleGrid>

          {/* Second row: Membres */}
          {topMembres.length > 0 && (
            <SimpleGrid
              columns={[1, 2, 3, 4]}
              spacing={6}
              justifyItems="center"
            >
              {topMembres.map((member) => (
                <TeamCard key={member.id} team={member} />
              ))}
            </SimpleGrid>
          )}

          <SimpleGrid columns={[2, 3, 4, 5]} spacing={6} justifyItems="center">
            {lastMembresRow.map((member) => (
              <TeamCard key={member.id} team={member} />
            ))}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Box>
  );
};

export default TeamSection;
