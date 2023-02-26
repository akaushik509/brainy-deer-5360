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

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { handleSignup } = useContext(Appcontext);
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
            <form onSubmit={(e) => handleSignup(e, user)}>
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
                          onChange={handleChange}
                          name="name"
                          type="text"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="imageurl">
                        <FormLabel>Image</FormLabel>
                        <Input
                          onChange={handleChange}
                          name="imageurl"
                          type="imageurl"
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input onChange={handleChange} name="email" type="email" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        onChange={handleChange}
                        name="password"
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
