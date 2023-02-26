import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";



const ProductCard = ({ product }) => {

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
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }

      /* function showProduct(productId) {
        // construct the request body
        var body = {
          productId: productId,
        };
        
        // make the request
        fetch('https://grumpy-lingerie-foal.cyclic.app/cart/prod/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization":localStorage.getItem("token")
          },
          body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      } */
      

  return (
    <Box borderWidth="1px" borderRadius="md" p="3" maxW="300px" w="100%">
      <Image src={product.imageUrl} alt={product.name} mb="3" />
      <Flex justify="space-between" align="center" mb="2">
        <Text fontSize="md" fontWeight="bold" mb="1">
          {product.name}
        </Text>
        <Text fontSize="md" fontWeight="bold" mb="1">
          ${product.price}
        </Text>
      </Flex>
      <Text fontSize="sm" mb="2">
        product.description
      </Text>
      <Button colorScheme="blue" size="sm" onClick={()=>{addToCart(product._id)}}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;