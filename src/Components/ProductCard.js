import React from "react";
import "../CSS/ProductCard.css"
import { BsFillCartPlusFill } from "react-icons/bs";


const ProductCard = ({ product }) => {

    function addToCart(productId) {
        // construct the request body
        var body = {
          productId: productId,
         
        };
        window.alert("added to cart")
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
    // <Box borderWidth="1px" borderRadius="md" p="3" maxW="300px" w="100%">
    //   <Image src={product.imageUrl} alt={product.name} mb="3" />
    //   <Flex justify="space-between" align="center" mb="2">
    //     <Text fontSize="md" fontWeight="bold" mb="1">
    //       {product.name}
    //     </Text>
    //     <Text fontSize="md" fontWeight="bold" mb="1">
    //       ${product.price}
    //     </Text>
    //   </Flex>
    //   <Text fontSize="sm" mb="2">
    //     product.description
    //   </Text>
    //   <Button colorScheme="blue" size="sm" onClick={()=>{addToCart(product._id)}}>
    //     Add to Cart
    //   </Button>
    // </Box>
    
   
     
    
    <div className="Card">
     
            <div>
                <img src={product.imageUrl} alt="prod_img" />
                  <div className="flextext">
                      <div >
                          <h4>{product.brand}</h4>
                          <p>{product.name}</p>
                          <p >
                            <span className="price"><b>₹{product.price}</b> </span>  <span><del>₹{product.oldprice}</del></span> 
                          </p>
                      </div>
                      <div className="icon">
                          <BsFillCartPlusFill onClick={() => addToCart(product.id)} />
                          {/* <AiOutlineHeart onClick={() => handleClick(el.id)} /> */}
                      </div>
                  </div>
            </div>
              
           
         
    </div>
 
  );
};

export default ProductCard;