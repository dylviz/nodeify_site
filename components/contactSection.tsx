import { Box } from "@chakra-ui/react";
import ContactForm from "./contactForm";

export const ContactSection: React.FC = (props) => {
  return (
    <Box
      id={"footerSection"}
      bgGradient="linear(to-b, gray.800, gray.600)"
      shadow={"2xl"}
      justifyItems={"center"}
      py={8}
    >
      <ContactForm />
    </Box>
  );
};
