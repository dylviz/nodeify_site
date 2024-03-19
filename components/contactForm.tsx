import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
          form.current,
          {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <Box color="gray.200" fontSize="lg" w={"full"} p={4}>
      <Heading as="h2" size="lg" p={2} color="gray.200">
        Contact Us!
      </Heading>
      <form onSubmit={sendEmail} ref={form}>
        <Box shadow="md" rounded="md" p={8} mb={4} borderWidth={1}>
          <FormControl id="name" mb={4} isRequired>
            <FormLabel fontWeight="bold">
              Name<span color="red.500">*</span>
            </FormLabel>
            <Input
              type="text"
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <FormControl id="email" mb={4} isRequired>
            <FormLabel fontWeight="bold">
              Email<span color="red.500">*</span>
            </FormLabel>
            <Input type="email" name="email" onChange={handleInputChange} />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel fontWeight="bold">Message</FormLabel>
            <Textarea name="message" onChange={handleInputChange} />
          </FormControl>
          <Flex alignItems="center" justifyContent="space-between">
            <Button colorScheme="gray" type="submit" px={6}>
              Submit
            </Button>
          </Flex>
        </Box>
      </form>
    </Box>
  );
}
