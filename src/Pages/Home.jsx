import { Box, Grid, Image, Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Carouse from '../Components/HomePage/Slider'
import Homeslide2 from '../Components/HomePage/HomeSlide2';
import ImageBox from '../Components/HomePage/ImageBox';
import ImageBox2 from '../Components/HomePage/ImageBox2';



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
        <Heading fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }}>TRENDING CATEGORIES</Heading>
        <ImageBox/>
        <ImageBox2/>
        <Heading>HOme Page</Heading>
      </Box>
    </>
  )
}

export default Home