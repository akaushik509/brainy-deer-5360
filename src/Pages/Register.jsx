import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useToast } from "@chakra-ui/react";
// import { Appcontext } from "../context/Appcontext";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://grumpy-lingerie-foal.cyclic.app/users/register",
        {
          name,
          email,
          password,
          imageUrl,
        }
      );
      console.log(response.data);
      toast({
        title: "Account created.",
        description: "Your account has been successfully created",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast({
        description: "Please provide all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container maxW={"5xl"}>
      <HStack>
        <Box flex={1}>
          <Image src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png" />
        </Box>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign up
              </Heading>
              <Text fontSize={"2xl"} color={"#f09e06"}>
                Hi new buddy, let's get you started with theTrendy Treasures!
              </Text>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "yellow.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <Flex>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="imageurl">
                        <FormLabel>Image</FormLabel>
                        <Input
                          type="text"
                          value={imageUrl}
                          onChange={(event) => setimageUrl(event.target.value)}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        // type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      loadingText="Submitting"
                      size="lg"
                      bg={"yellow.400"}
                      color={"white"}
                      _hover={{
                        bgImage: "linear-gradient(to right, #58aa50 ,#f09e06 )",
                      }}
                      bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user?{" "}
                      <Link color={"blue.400"} href="login">
                        Login
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </form>
          </Stack>
        </Flex>
      </HStack>
    </Container>
  );
}
export default Register;
