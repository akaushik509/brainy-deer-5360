import { useState, Component } from "react";
import Slider from "react-slick";
import { Box, Image, Flex, IconButton, Show, Text, Center, Avatar } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const carouselItems = [
  {
    id: 1,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png",
    tag: "Printed T-Shirts",
  },
  {
    id: 2,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg",
    tag: "Oversized T-Shirts",
  },
  {
    id: 3,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png",
    tag: "Sweatshirts & Hoodies",
  },
  {
    id: 4,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg",
    tag: "Joggers",
  },
  {
    id: 5,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg",
    tag: "Vests",
  },
  {
    id: 6,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg",
    tag: "Full Sleeve T-Shirts",
  },
];

const ImageBox = () => {
    const settings = {

        infinite: false,
        speed: 500,
       
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
           
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <Center>
    <Box overflowX="hidden" maxWidth="100vw" marginTop={"20px"}>
        {/* Mobile tablet view */}
        <Show breakpoint='(min-width: 1080px)'>
            <Slider {...settings}>
            {
                carouselItems.map((e)=>(
                    <Box marginRight={"50px"} key={e.id}>
                        <Image border={"1px solid black"} src={e.imgUrl} />
                    </Box>
                ))
            }
            </Slider>
        </Show>
    </Box>
    </Center>

    <Center>
    <Box overflowX="hidden" maxWidth="100vw" >
        {/* Mobile tablet view */}
        <Show breakpoint='(max-width: 992px)'>
            <Slider {...settings}>
            {
                carouselItems.map((e)=>(
                    <Box key={e.id}>
                        <Avatar size={{ base: "xl",sm: "lg",md: "2xl" }} src={e.imgUrl} />
                        <Text>{e.tag}</Text>
                    </Box>
                ))
            }
            </Slider>
        </Show>
    </Box>
    </Center>
    </>
  );
};

export default ImageBox;
