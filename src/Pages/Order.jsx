import { useEffect, useState } from "react";
import {
    Avatar,
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function Order() {
  const [orders, setOrders] = useState();
  let array =[]

  useEffect(() => {
    // Fetch order data from API
    fetch("https://grumpy-lingerie-foal.cyclic.app/myorder/orders",{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(res=>{
        let data = res[0]
        console.log(res)
        data.products.forEach(function(e){
            
            array.push(e.product)
            
        })
        let b  =[]
       // console.log("arr",array.length)
       for(let i=0;i<array.length;i++){
        //console.log(array[i])
        b.push(array[i])
       }
       setOrders(b) 
        
    })
    .catch(err=>console.log(err)) 

  }, []);

  function formatOrderStatus(status) {
    switch (status) {
      case "pending":
        return "Pending";
      case "shipped":
        return "Shipped";
      case "delivered":
        return "Delivered";
      default:
        return "Unknown";
    }
  }
 


  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="lg">My Orders</Heading>
        <Text> orders</Text>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Name</Th>
            <Th>Image</Th>
            <Th>Price</Th> 
          </Tr>
        </Thead>
        <Tbody>
           {
           orders && orders?.map((order) => (
            <Tr key={order._id}>
              <Td>{order.type}</Td>
              <Td>{order.name}</Td>
              <Td><Avatar src={order.imageUrl}/></Td>
              <Td>{order.price}</Td> 
          
            </Tr>
          ))
          }  
          
        </Tbody>
      </Table>
    </Box> 
  );
}

export default Order;
