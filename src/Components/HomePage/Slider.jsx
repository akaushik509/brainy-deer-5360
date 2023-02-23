import { useState, Component } from "react";
import Slider from "react-slick";
import { Box, Image, Flex, IconButton, Slide } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const carouselItems = [
  {
    id: 1,
    imgUrl: "https://assets.tatacliq.com/medias/sys_master/images/46044230418462.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    imgUrl: "https://assets.tatacliq.com/medias/sys_master/images/46044230549534.jpg",
    alt: "Slide 2",
  },
  {
    id: 3,
    imgUrl: "https://assets.tatacliq.com/medias/sys_master/images/46044230483998.jpg",
    alt: "Slide 3",
  },
];

const Carouse = () => {
  return (
    <>
    <Box overflowX="hidden" maxWidth="100vw">
        <Slider>
        {
            carouselItems.map((e)=>(
                <Image key={e.id} src={e.imgUrl} />
            ))
        }
        </Slider>
    </Box>
    </>
  );
};

export default Carouse;
