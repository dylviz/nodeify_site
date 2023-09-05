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
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import SupportedNetworksData from "data/supportedNetworks";
import pricing from "data/pricing";

import {
	Highlights,
	HighlightsItem,
	HighlightsTestimonialItem,
} from "components/highlights";
import NetworksGrid from "components/networks-grid/networksgrid";

const Home: NextPage = () => {
	return (
		<Box>
			<SEO
				title="Noedify"
				description="Nodeify blockchain indexing and validation node operator"
			/>
			<Box>
				<HeroSection />

				<HighlightsSection />

				{/* <FeaturesSection /> */}

				<SupportedNetworksSection />

				{/* <PricingSection /> */}

				<FaqSection />
			</Box>
		</Box>
	);
};

const HeroSection: React.FC = () => {
	return (
		<Box position="relative" overflow="hidden">
			<BackgroundGradient height="100%" />
			<Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
				<Stack direction={{ base: "column", lg: "row" }} alignItems="center">
					<Hero
						id="home"
						justifyContent="flex-start"
						px="0"
						title={
							<FallInPlace>
								The most performant and reliable tech-stacks
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
								<ButtonLink colorScheme="primary" size="lg" href="/signup">
									Subcribe to Newsletter
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
						left={{ lg: "60%", xl: "55%" }}
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

const HighlightsSection = () => {
	const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

	return (
		<Highlights>
			<HighlightsItem colSpan={[1, null, 2]} title="Core components">
				<VStack alignItems="flex-start" spacing="8">
					<Text color="muted" fontSize="xl">
						Nodeify is fully committed to full-stack decentralization and has
						made <Em>30+ open source contributions</Em> to help the community
						reach this goal.
					</Text>

					<Flex
						rounded="full"
						borderWidth="1px"
						flexDirection="row"
						alignItems="center"
						py="1"
						ps="8"
						pe="2"
						bg="primary.900"
						_dark={{ bg: "gray.900" }}
					>
						<Box>
							<Text color="yellow.400" display="inline">
								yarn add
							</Text>{" "}
							<Text color="cyan.300" display="inline">
								@Nodeify/getting-started
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
			<HighlightsItem title="Solid foundations">
				<Text color="muted" fontSize="lg">
					We don&apos;t like to re-invent the wheel, neither should you. We
					build on the most productive and established tools in the scene to
					offer optimal performance and reliability.
				</Text>
			</HighlightsItem>
			<HighlightsTestimonialItem
				name="Vince Petoscia"
				description="Founder"
				avatar="/static/images/avatar.jpg"
				gradient={["pink.200", "purple.500"]}
			>
				&quot;I thrive on the challenges of optimizing systems, solving
				problems, and pushing the boundaries for peak performance. This drive,
				coupled with my deep interest in web3, motivated me to launch
				Nodeify.&quot;
			</HighlightsTestimonialItem>
			<HighlightsItem
				colSpan={[1, null, 2]}
				title="Back your network with confidence"
			>
				<Text color="muted" fontSize="lg">
					We take care of the heavy lifting, so you can focus on what matters to
					you. With expert support and a 99.9% uptime guarantee, you can rest
					assured that your network is in good hands.
				</Text>
				<Wrap mt="8">
					{[
						"authentication",
						"navigation",
						"crud",
						"settings",
						"load-balancing",
						"billing",
						"a11y testing",
						"server-side rendering",
						"documentation",
						"unit testing",
						"Analytics",
						"responsiveness",
					].map((value) => (
						<Tag
							key={value}
							variant="subtle"
							colorScheme="purple"
							rounded="full"
							px="3"
						>
							{value}
						</Tag>
					))}
				</Wrap>
			</HighlightsItem>
		</Highlights>
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

const SupportedNetworksSection = () => {
	const avatarUrls: string[] = SupportedNetworksData.items.map(
		(item) => item.avatar
	);

	return (
		<Box id="networks" pb={"10"}>
			<NetworksGrid imagePaths={avatarUrls} />
		</Box>
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
