import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";

import { Br } from "@saas-ui/react";
import { ContactSection } from "components/contactSection";
import { Faq } from "components/faq";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import { FallInPlace } from "components/motion/fall-in-place";
import NetworksGrid from "components/networks-grid/networksgrid";
import { Em } from "components/typography";
import faq from "data/faq";
import { managedNetworks, stakedNetworks } from "data/supportedNetworks";
import {
  FiArrowRight,
  FiCloud,
  FiDatabase,
  FiLock,
  FiTrendingUp,
} from "react-icons/fi";
import { scrollToSection } from "utils/scrolling-helper";

const Home: NextPage = () => {
  const stakedNetworkImages: string[] = stakedNetworks.items.map(
    (item) => item.avatar
  );
  const managedNetworkImages: string[] = managedNetworks.items.map(
    (item) => item.avatar
  );
  return (
    <Box>
      <SEO
        title="Nodeify"
        description="Nodeify blockchain indexing and validation node operator"
      />
      <Box>
        <HeroSection />

        {/* <HighlightsSection /> */}

        {/* <FeaturesSection /> */}

        {/* Staked Networks */}
        <Box pb={"10"} mb={"10"} id="networksSection">
          <NetworksGrid
            title="Indexed Chains"
            imagePaths={stakedNetworkImages}
          />
        </Box>

        {/* Managed Networks */}
        <Box pb={"10"}>
          <NetworksGrid
            title="Managed Chains"
            imagePaths={managedNetworkImages}
          />
        </Box>

        {/* <PricingSection /> */}

        {/* <FaqSection /> */}
        <Box id="aboutSection" maxW={"4xl"} mx={"auto"} py={8}>
          <Heading>About</Heading>
          <p>This is the about section</p>
        </Box>

        <ContactSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            title={
              <FallInPlace>
                The Most performant and reliable infrastructures
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Nodeify provides <Em>Indexing and Validation</Em>
                <Br /> services for the most high-demand and operation-critical
                blockchain networks.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              {/* <HStack pt="4" pb="12" spacing="4">
                <EthLogo width="30px" /> <PolygonLogo height="30px" />
              </HStack> */}

              <ButtonGroup spacing={4} alignItems="center" py={4}>
                {/* <ButtonLink colorScheme="gray" size="lg" href="/signup">
                  Learn more
                </ButtonLink> */}
                <Button
                  onClick={() => scrollToSection("footerSection")}
                  size="lg"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Contact
                </Button>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "55%", xl: "50%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%" borderRadius={"2xl"}>
                <Image
                  src="/static/images/heroimg.webp"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Scalable Networking",
            icon: FiTrendingUp,
            description:
              "Scale your network infrastructure effortlessly to meet growing demands.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Security-First",
            icon: FiLock,
            description:
              "Prioritize security with our robust infrastructure solutions to safeguard your data.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Efficient Data Management",
            icon: FiDatabase,
            description:
              "Manage your data seamlessly with our high-performance infrastructure tools.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Cloud Integration",
            icon: FiCloud,
            description:
              "Seamlessly integrate your IT infrastructure with the cloud for enhanced agility.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Delegate to Nodeify",
        href: "#",
      },
    },
  };
}
