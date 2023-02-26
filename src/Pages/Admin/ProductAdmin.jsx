import { useState, useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react'
import { Button } from 'react-bootstrap'

const ProductAdmin = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProd()
  }, [])


  const remove=(id)=>{
    fetch(`https://grumpy-lingerie-foal.cyclic.app/prod/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "authbyadmin":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(res=>{
        console.log("hello",res)
        //setProducts(res.body)
        getProd();
    })
    
}

const getProd = () =>{
    return fetch("https://grumpy-lingerie-foal.cyclic.app/prod",{
    }).then(res=>res.json())
    .then(res=>{
        console.log(res)
        setProducts(res)
    })
    .catch(err=>console.log(err)) 
};


  return (
    <Table justifyItems={"center"}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Brand</Th>
          <Th>Image</Th>
          <Th>Category</Th>
          <Th>Type</Th>
          <Th>Remove</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products && products?.map((product) => (
          <Tr key={product._id}>
            <Td textAlign="center">{product.name}</Td>
            <Td textAlign="center">{product.price}</Td>
            <Td textAlign="center">{product.brand}</Td>
            <Td><Image width={"50px"} src={product.imageUrl}/></Td>
            <Td>{product.category}</Td>
            <Td>{product.type}</Td>
            <Td>
              <Button colorScheme="red" onClick={() => remove(product._id)}>
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default ProductAdmin
