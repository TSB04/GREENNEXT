import * as React from "react";
import {
  Box,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
} from "@chakra-ui/react";

import { Section, SectionTitle, SectionTitleProps } from "@/components/section";

const Revealer = ({ children }: React.PropsWithChildren<object>) => {
  return children;
};

export interface FeaturesProps
  extends Omit<SectionTitleProps, "title" | "variant">,
    ThemingProps<"Features"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  features: Array<FeatureProps>;
  columns?: ResponsiveValue<number>;
  spacing?: string | number;
  aside?: React.ReactNode;
  reveal?: React.FC<React.PropsWithChildren<object>>;
  iconSize?: SystemProps["boxSize"];
  innerWidth?: SystemProps["maxW"];
}

export interface FeatureProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "top";
  iconSize?: SystemProps["boxSize"];
  ip?: "left" | "top";
  variant?: string;
  delay?: number;
}

export const Feature: React.FC<FeatureProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    ip,
    variant,
  } = props;

  const styles = useMultiStyleConfig("Feature", { variant });
  const pos = iconPosition || ip;
  const direction = pos === "left" ? "row" : "column";

  return (
    <Stack sx={styles.container} direction={direction}>
      {icon && icon}
      <Box>
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  );
};


export const Features: React.FC<FeaturesProps> = (props) => {
  const {
    title,
    description,
    features,
    columns = [1, 2, 3],
    spacing = 8,
    align: alignProp = "center",
    iconSize = 8,
    aside,
    reveal: Wrap = Revealer,
    ...rest
  } = props;

  const align = !!aside ? "left" : alignProp;

  const ip = align === "left" ? "left" : "top";

  return (
    <Section {...rest}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          {(title || description) && (
            <Wrap>
              <SectionTitle
                title={title}
                description={description}
                align={align}
              />
            </Wrap>
          )}
          <SimpleGrid columns={columns} spacing={spacing}>
            {features.map((feature, i) => {
              const wrapProps = Wrap !== Revealer ? { delay: feature.delay } : {};
              return (
                <Wrap key={i} {...wrapProps}>
                  <Feature iconSize={iconSize} {...feature} ip={ip} />
                </Wrap>
              );
            })}
          </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p="8" >
            {aside}
          </Box>
        )}
      </Stack>
    </Section>
  );
};
