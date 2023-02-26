import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Flex } from '@chakra-ui/react';

function Cart() {
  const [cartData, setCartData] = useState();
  

  useEffect(() => {
    getCart();
  }, []);



  const removeFromCart=(productId)=>{
    fetch(`https://grumpy-lingerie-foal.cyclic.app/cart/removefromcart/${productId}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization":localStorage.getItem("token")
        }
    }).then((res) => {
        res.json()
        setCartData(res.data)
        getCart();
       
    })
    
}

  const getCart = () =>{
    return fetch("https://grumpy-lingerie-foal.cyclic.app/cart/getcart",{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(res=>{
        console.log(res)
        setCartData(res)
    })
    .catch(err=>console.log(err)) 
};

const orderall=()=>{
    fetch(`https://grumpy-lingerie-foal.cyclic.app/myorder/cartitem/`,{
        method:"POST",
        body:JSON.stringify(),
        headers:{
            "Content-Type": "application/json",
            "Authorization":localStorage.getItem("token")
        }
    }).then((res) => {
        res.json()
        getCart()
    })
}

  return (
    <>
    <Flex justifyContent="flex-end" mt={4} >
        <Button colorScheme="blue" onClick={orderall} >
          Order All
        </Button>
      </Flex>
    <Table variant="simple" size="sm" >
      <Thead>
        <Tr>
          <Th>Product Name</Th>
          <Th>Price</Th>
          <Th>Remove</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cartData && cartData?.map(item => (
          <Tr key={Date.now()}>
            <Td>{item.name}</Td>
            <Td>${item.price.toFixed(2)}</Td>
            <Td>
              <Button colorScheme="red" size="sm" onClick={() => removeFromCart(item._id)}>Remove</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </>
  );
}

export default Cart;