import { useState, Component, useEffect } from "react";
import Slider from "react-slick";
import { Box, Image, Flex, IconButton, Show, Text, Center, Avatar, Heading } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const getdata=()=>{
    return axios.get(`https://product-data.onrender.com/mens`)
}

const Clothtab = () => {
    const [clothdata, setData] = useState("");

    useEffect(() => {
        handleGetData();
      }, []);

    const handleGetData = () => {
        getdata().then((res) => {
            setData(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err)
          });
      };

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
              slidesToShow: 5,
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
    <Box  maxWidth="100vw" marginTop={"20px"}>
        {/* Mobile tablet view */}
        <Show breakpoint='(min-width: 1080px)'>
            <Center>
            <Flex gap="20px" w={"80%"} >
            {
                 clothdata.slice(0,5) && clothdata.slice(0,5)?.map((e)=>(
                    <Box  key={e.id} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" >
                        <Image   src={e.image} />
                        <Heading fontSize={"xl"}>{e.name}</Heading>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize={"2xl"}>Rs. {e.price}</Text>
                            <Text textDecoration="line-through">Rs. {e.oldprice}</Text>
                        </Flex>
                    </Box>
                )) 
                /* console.log(clothdata) */
            }
            </Flex>
            </Center>
        </Show>
    </Box>
    </Center>

    <Center>
    <Box overflowX="hidden" maxWidth="95vw" >
        {/* Mobile tablet view */}
        <Show breakpoint='(max-width: 992px)'>
            <Flex gap="10px">
            {
                clothdata.slice(0,2) && clothdata.slice(0,2)?.map((e)=>(
                    <Box key={e.id} overflowX="hidden" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                        <Image size={{ base: "xl",sm: "lg",md: "2xl" }} src={e.image} />
                        <Text isTruncated noOfLines={2} fontSize={"sm"}>{e.name}</Text>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }}>Rs. {e.price}</Text>
                            <Text fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }} textDecoration="line-through">Rs. {e.oldprice}</Text>
                        </Flex>
                    </Box>
                ))
            }
            </Flex>
        </Show>
    </Box>
    </Center>
    </>
  );
};

export default Clothtab;
