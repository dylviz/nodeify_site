import {
	useClipboard,
	VStack,
	Flex,
	IconButton,
	Wrap,
	Tag,
	Text,
	Box,
} from "@chakra-ui/react";
import { Em } from "components/typography";
import { FiCheck, FiCopy } from "react-icons/fi";
import {
	Highlights,
	HighlightsItem,
	HighlightsTestimonialItem,
} from "./highlights";

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
