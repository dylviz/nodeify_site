import { NextSeoProps } from "next-seo";
import { FaDiscord, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Nodeify",
    description: "Blockchain indexing and validation services",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "networksSection",
        label: "Networks",
      },
      {
        id: "aboutSection",
        label: "About",
      },
      // {
      // 	label: "Connect Wallet",
      // 	href: "/login",
      // 	variant: "primary",
      // },
    ],
  },
  footer: {
    links: [
      // {
      // 	href: "mailto:admin@nodeify.net",
      // 	label: <FaEnvelope size={24} />,
      // },
      {
        href: "https://twitter.com/nodeify_eth",
        label: <FaTwitter size={24} />,
      },
      {
        href: "https://github.com/kw1knode",
        label: <FaGithub size={24} />,
      },
      {
        href: "https://github.com/kw1knode",
        label: <FaDiscord size={24} />,
      },
    ],
    copyright: "Nodeify 2024",
  },
  signup: {
    title: "A world of possibilities awaits",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
