import { Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";

import * as React from "react";

import siteConfig from "@/data/config";
import Image from "next/image";

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo = ({ href = "/", onClick }: LogoProps) => {
  let logo;
  if (siteConfig.logo) {
    // logo = <Box as={siteConfig.logo} height="32px" mt="-4px" />
    logo = (
      <Image
        src={siteConfig.logo}
        alt="GreenNext Logo"
        width={300}
        height={300}
        style={{
          width: "60px",
          height: "60px",
          objectFit: "contain",
          borderRadius: "lg",
        }}
        priority
        draggable={false}
        loading="eager"
      />
    );
  } else {
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.seo?.title}
      </Heading>
    );
  }

  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      <Link
        href={href}
        display="flex"
        borderRadius="sm"
        onClick={onClick}
        mt={-3}
      >
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  );
};
