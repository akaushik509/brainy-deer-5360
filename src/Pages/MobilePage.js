import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts, addToCart, addToWishlist } from "../Redux/action";
import { AiOutlineHeart } from "react-icons/ai"
import { BsFillCartPlusFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi"
import "../CSS/Mens.css";
import Sidebar from "../Components/Sidebar";
import { Flex,Text,Select,Input,Button, useToast, Box, Image, GridItem } from "@chakra-ui/react";
import Grid from "react-loading-icons/dist/esm/components/grid";
const MobilePage = () => {


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();

  useEffect(() => {
    // Fetch all products and categories from the API
    fetch("https://grumpy-lingerie-foal.cyclic.app/prod/search?type=Mobile")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Extract all unique categories from the products
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      (searchTerm === "" ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  ); 

  function addToCart(productId) {
    // construct the request body
    var body = {
      productId: productId,
     
    };
    
    // make the request
    fetch('https://grumpy-lingerie-foal.cyclic.app/cart/addtocart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":localStorage.getItem("token")
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      response.json()
      toast({
        description: "Product is successfully added to Cart",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }



  return (
    < >
      {/* <Box className="fixed-sidebar"> */}
      <Flex justify="space-between" align="center" mb="6" w={"70%"} margin={"auto"} display={{sm:"grid", md:"grid", lg:"flex"}}>
        <Text fontSize={{base:"sm", md:"md", xl:"3xl"}} fontWeight="bold">
          Products
        </Text>
        <Flex align="center" >
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            mr="3"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            w="300px"
            mr="3"
          />
          <Button onClick={() => setSearchTerm("")}>Clear</Button>
        </Flex>
      </Flex>
      {/* </Box> */}
     
      <Box w="70%" margin={"auto"} display={"grid"} gap="10px" gridTemplateColumns={{sm:"repeat(1, 1fr)", md:"repeat(3, 1fr)", xl: "repeat(3, 1fr)"}}>
        {filteredProducts &&
          filteredProducts.map((el) => {
            return (
              <Box w="100%" key={Date.now()}>
                <Image src={el.imageUrl} alt="prod_img" />
                <Box>
                    <Box>
                        <Text>{el.brand}</Text>
                        <Text>{el.name}</Text>
                        <Text >
                          <span ><b>₹{el.price}</b> </span>  <span><del>₹{el.oldprice}</del></span> 
                         </Text>
                    </Box>
                    <Box>
                        <Button onClick={() => addToCart(el._id)}>Add To Cart</Button>
                    </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
      
    </>
  );
};

export default MobilePage;
