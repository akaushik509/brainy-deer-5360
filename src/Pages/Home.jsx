import { Box, Grid, Image, Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Carouse from '../Components/HomePage/Slider'
import Homeslide2 from '../Components/HomePage/HomeSlide2';
import ImageBox from '../Components/HomePage/ImageBox';
import ImageBox2 from '../Components/HomePage/ImageBox2';
import { NavLink } from "react-router-dom";
import Clothtab from '../Components/HomePage/Clothtab';
import Footer from '../Components/HomePage/Footer';


const Home = () => {
  return (
    <>
      <Box>
        <Carouse />
        <Image src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" w={"100%"}/>
        <Homeslide2/>
        <Heading fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }} marginTop={"20px"}>DESIGNS OF THE WEEK</Heading>
        <Flex>
          <Image w="50%" src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1676955702.jpg"/>
          <Image w="50%" src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1676955702.jpg"/>
        </Flex>
        <Heading fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }} marginTop="20px">TRENDING CATEGORIES</Heading>
        <ImageBox/>
        <ImageBox2/>
        <Heading fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }} marginTop="20px">BIGGEST DEALS!</Heading>
        <Clothtab/>
        <Heading fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }} marginTop="20px">OUR BEST PICKS</Heading>
        <Grid templateColumns={{ base:"repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }} gap={6} marginTop="20px">
          <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1674483112.jpg"/>
          <Image src="https://images.bewakoof.com/uploads/grid/app/1x1-The-Ultimate-Joggers-common--1--1676898158.gif"/>
          <Image src="https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg"/>
          <Image src="https://images.bewakoof.com/uploads/grid/app/midsizebanner-common-jeans-1675666577.jpg"/>
        </Grid>
        <Image marginTop={"0px"} src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" w={"100%"}/>
        <Image marginTop={"0px"} src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" w={"100%"}/>
        <Footer/>
      </Box>
    </>
  )
}

export default Home