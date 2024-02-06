import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
	Container,
	Box,
	Stack,
	HStack,
	ButtonGroup,
	Button,
	Icon,
	Heading,
	Text,
	Wrap,
	Tag,
	useClipboard,
	IconButton,
	VStack,
	Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { EthLogo, PolygonLogo } from "components/logos";
import {
	FiArrowRight,
	FiBox,
	FiCheck,
	FiCloud,
	FiCode,
	FiCopy,
	FiDatabase,
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
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";
import { ButtonLink } from "components/button-link/button-link";
import faq from "data/faq";
import pricing from "data/pricing";
import { stakedNetworks, managedNetworks } from "data/supportedNetworks";
import NetworksGrid from "components/networks-grid/networksgrid";

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
				title="Noedify"
				description="Nodeify blockchain indexing and validation node operator"
			/>
			<Box>
				<HeroSection />

				{/* <HighlightsSection /> */}

				{/* <FeaturesSection /> */}

				{/* Staked Networks */}
				<Box pb={"10"} mb={"10"}>
					<NetworksGrid
						title="Staked Networks"
						imagePaths={stakedNetworkImages}
					/>
				</Box>

				{/* Managed Networks */}
				<Box pb={"10"}>
					<NetworksGrid
						title="Managed Networks"
						imagePaths={managedNetworkImages}
					/>
				</Box>

				{/* <PricingSection /> */}

				{/* <FaqSection /> */}
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
								Noedify provides <Em>Indexing and Validation</Em>
								<Br /> services for the most high-demand and operation-critical
								blockchain networks.
							</FallInPlace>
						}
					>
						<FallInPlace delay={0.8}>
							<HStack pt="4" pb="12" spacing="4">
								<EthLogo width="30px" /> <PolygonLogo height="30px" />
							</HStack>

							<ButtonGroup spacing={4} alignItems="center">
								<ButtonLink colorScheme="gray" size="lg" href="/signup">
									Learn more
								</ButtonLink>
								<ButtonLink
									size="lg"
									href="#"
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
								</ButtonLink>
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
							<Box overflow="hidden" height="100%">
								<Image
									src="/static/screenshots/list.png"
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

const FeaturesSection = () => {
	return (
		<Features
			id="features"
			title={
				<Heading
					lineHeight="short"
					fontSize={["2xl", null, "4xl"]}
					textAlign="left"
					as="p"
				>
					Not your standard
					<Br /> dashboard template.
				</Heading>
			}
			description={
				<>
					Saas UI Pro includes everything you need to build modern frontends.
					<Br />
					Use it as a template for your next product or foundation for your
					design system.
				</>
			}
			align="left"
			columns={[1, 2, 3]}
			iconSize={4}
			features={[
				{
					title: "Components.",
					icon: FiBox,
					description:
						"All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.",
					variant: "inline",
				},
				{
					title: "Starterkits.",
					icon: FiLock,
					description:
						"Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.",
					variant: "inline",
				},
				{
					title: "Documentation.",
					icon: FiSearch,
					description:
						"Extensively documented, including storybooks, best practices, use-cases and examples.",
					variant: "inline",
				},
				{
					title: "Onboarding.",
					icon: FiUserPlus,
					description:
						"Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.",
					variant: "inline",
				},
				{
					title: "Feature flags.",
					icon: FiFlag,
					description:
						"Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
					variant: "inline",
				},
				{
					title: "Upselling.",
					icon: FiTrendingUp,
					description:
						"Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.",
					variant: "inline",
				},
				{
					title: "Themes.",
					icon: FiToggleLeft,
					description:
						"Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
					variant: "inline",
				},
				{
					title: "Generators.",
					icon: FiTerminal,
					description:
						"Extend your design system while maintaininig code quality and consistency with built-in generators.",
					variant: "inline",
				},
				{
					title: "Monorepo.",
					icon: FiCode,
					description: (
						<>
							All code is available as packages in a high-performance{" "}
							<Link href="https://turborepo.com">Turborepo</Link>, you have full
							control to modify and adjust it to your workflow.
						</>
					),
					variant: "inline",
				},
			]}
		/>
	);
};

const PricingSection = () => {
	return (
		<Pricing {...pricing}>
			<Text p="8" textAlign="center" color="muted">
				VAT may be applicable depending on your location.
			</Text>
		</Pricing>
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
