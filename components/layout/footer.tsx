import {
	Box,
	BoxProps,
	SimpleGrid,
	Container,
	Text,
	Stack,
	Flex,
	HStack,
	Spacer,
} from "@chakra-ui/react";

import { Link, LinkProps } from "@saas-ui/react";

import siteConfig from "data/config";

export interface FooterProps extends BoxProps {
	columns?: number;
}

export const Footer: React.FC<FooterProps> = (props) => {
	const { columns = 2, ...rest } = props;
	return (
		<Box bg="white" _dark={{ bg: "blackAlpha.700" }} {...rest}>
			<HStack justify="center" spacing="6" alignSelf={"center"} p={6} pt={8}>
				{siteConfig.footer?.links?.map(({ href, label }) => (
					<FooterLink key={href} href={href}>
						{label}
					</FooterLink>
				))}
			</HStack>

			<Container maxW="container.2xl" px="8" py="8">
				{/* <SimpleGrid columns={columns}> */}
				<Flex>
					<Stack alignItems="flex-start">
						<Flex>
							<Box as={siteConfig.logo} flex="1" height="100px" />
						</Flex>
						<Text fontSize="md" color="muted">
							{siteConfig.seo.description}
						</Text>
					</Stack>
					<Spacer />
					<Flex color="muted" fontSize="sm" align={"flex-end"}>
						{siteConfig.footer.copyright}
					</Flex>
				</Flex>
				{/* </SimpleGrid> */}
			</Container>
		</Box>
	);
};

export interface CopyrightProps {
	title?: React.ReactNode;
	children: React.ReactNode;
}

export const FooterLink: React.FC<LinkProps> = (props) => {
	const { children, ...rest } = props;
	return (
		<Link
			color="muted"
			fontSize="sm"
			textDecoration="none"
			_hover={{
				color: "white",
				transition: "color .2s ease-in",
			}}
			{...rest}
		>
			{children}
		</Link>
	);
};
