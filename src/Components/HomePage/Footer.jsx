import { Flex, Box, Text, Link, Stack, Center, Heading, Divider, Grid } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg={"gray.900"} >
        <Box w={"80%"} margin="auto" marginBottom={"20px"} >
            <Heading color={"#FDD835"} textAlign={{base:"center", md:"left", xl:"left"}}>Trendy Treasures</Heading>
        </Box>
        <Grid  gap={{base:"10px",md:"20px",lg:"50px"}} templateColumns={{base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)"}} w={"80%"} margin="auto" justifyContent={"space-between"} >
            <Box color={"white"}  textAlign={"left"} >
                <Text color={"#FDD835"}>CUSTOMER SERVICE</Text>
                <Text>Contact Us</Text>
                <Text>Track Order</Text>
                <Text>Return Order</Text>
                <Text>Cancel Order</Text>
                <br/>
                <Text>15 Days return policy Cash on delivery*</Text>
            </Box>

            <Box color={"white"}  textAlign={"left"}>
                <Text color={"#FDD835"}>COMPANY</Text>
                <Text>About Us</Text>
                <Text>We're Hiring</Text>
                <Text>Terms & Conditions</Text>
                <Text>Privacy Policy</Text>
                <Text>Blog</Text>
            </Box>

            <Box color={"white"}  textAlign={"left"}>
                <Text color={"#FDD835"}>CONNECT WITH US</Text>
                <Text>4.7M People Like this</Text>
                <Text>1M Followers</Text>
            </Box>

            <Box color={"white"}  textAlign={"left"}>
                <Text color={"#FDD835"}>KEEP UP TO DATE</Text>
                <Text>+91 9586895685</Text>
                <Text>trendytresures.blog.com</Text>
            </Box>
        </Grid>
    </Box>
  );
}

export default Footer;
