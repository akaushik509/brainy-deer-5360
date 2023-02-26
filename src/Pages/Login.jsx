import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  HStack,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://grumpy-lingerie-foal.cyclic.app/users/login",
        { email, password }
      );
      console.log(response.data.token);
      const token = response.data.token;
      const userName = response.data.userName;
      const ProfilePic = response.data.ProfilePic;
      const emailid = response.data.email;
      const address = response.data.address;
      const mobile = response.data.mobile;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("userName", userName);
        localStorage.setItem("emailid", emailid);
        localStorage.setItem("address", address);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("ProfilePic", ProfilePic);
        toast({
          description: "Signed in successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/");
      }
    } catch (error) {
      toast({
        description: "Failed",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      navigate("/login");
      console.error(error);
    }
  };

  return (
    <Container maxW={"5xl"}>
      <HStack>
        <Box flex={1}>
          <Image src="https://images.bewakoof.com/web/group-19-1617704502.png" />
        </Box>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Heading color={"#f09e06"}>
              Welcome to the world of Trendy Treasures!
            </Heading>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Login </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link color={"yellow.400"}>Trendy Treasures </Link>
              </Text>
              <Text fontSize={"lg"} color={"gray.600"}>
                New to our website{" "}
                <Link color={"yellow.400"} href="/register">
                  Register here
                </Link>
              </Text>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"}>Forgot password?</Link>
                    </Stack>
                    <Button
                      type="submit"
                      // bg={"yellow.400"}
                      // color={"white"}
                      _hover={{
                        bgImage: "linear-gradient(to right, #58aa50 ,#f09e06 )",
                      }}
                      bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}
                    >
                      Sign in
                    </Button>
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
export default Login;
