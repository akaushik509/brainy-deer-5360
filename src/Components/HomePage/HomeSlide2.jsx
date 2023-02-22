import { useState, Component } from "react";
import Slider from "react-slick";
import { Box, Image, Text, IconButton, Slide, Show } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const carouselItems = [
  {
    id: 1,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-bestsellers-1676881692.jpg",
    tag: "Bestsellers",
  },
  {
    id: 2,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-new-arrivals-1674817171.jpg",
    tag: "New Arrivals",
  },
  {
    id: 3,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg",
    tag: "Hot Deals",
  },
  ,
  {
    id: 4,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg",
    tag: "Official Collaboration",
  },
  {
    id: 5,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg",
    tag: "Vote for Designs",
  },
  {
    id: 6,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
    tag: "Last Sizes Left",
  },
  {
    id: 7,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg",
    tag: "Plus Size",
  },
  ,
  {
    id: 8,
    imgUrl: "https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg",
    tag: "Customization",
  }
];

const Homeslide2 = () => {

    const settings = {
       
        infinite: false,
        speed: 500,
       
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 4,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
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
    <Box overflowX="hidden" maxWidth="100vw">
        {/* Mobile tablet view */}
        <Show>
            <Slider {...settings}>
            {
                carouselItems.map((e)=>(
                    <Box>
                        <Image src={e.imgUrl} />
                        <Text>{e.tag}</Text>
                    </Box>
                ))
            }
            </Slider>
        </Show>
    </Box>
    </>
  );
};

export default Homeslide2;
