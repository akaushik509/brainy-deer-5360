import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Button, useToast
} from '@chakra-ui/react';

const AdminAddProduct = () => {
    const [name, setName] = useState("");
    const [oldprice, setOldprice] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const toast = useToast()



 /*  const [product, setProduct] = useState({
    name: '',
    oldPrice: 0,
    price: 0,
    imageUrl: '',
    category: '',
    type: '',
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleNumberInputChange = (name, value) => {
    setProduct({ ...product, [name]: value });
  };
 */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /*   const response = await axios.post('https://grumpy-lingerie-foal.cyclic.app/prod/addproduct', { name,oldprice,
        price,
        imageUrl,
        category,
        type });

      console.log(response.data.token);
      const token = response.data.token; */
      const product = {
        name,oldprice,
        price,
        imageUrl,
        category,
        type
      }
      
        
        const response = await fetch('https://grumpy-lingerie-foal.cyclic.app/prod/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "authbyadmin":localStorage.getItem("token")
          },
          body: JSON.stringify(product),
        });
        const data = await response.json();
  
        if (response.ok) {
          toast({
            title: 'Product added',
            description: 'The product has been added successfully.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          /* setProduct({
            name: '',
            oldPrice: 0,
            price: 0,
            imageUrl: '',
            category: '',
            type: '',
          }); */
        } else {
          toast({
            title: 'Error',
            description: data.message || 'Something went wrong. Please try again later.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again later.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
  };

  return (
    <Box p="4" maxW="xl" mx="auto">
      <Heading mb="8">Add Product</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4" isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={name}  onChange={(event) => setName(event.target.value)} />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Old Price</FormLabel>
          <Input
            name="oldPrice"
            type="number"
            value={oldprice}
            min={0}
           
            onChange={(event) => setOldprice(event.target.value)}
          >
         
          </Input>
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Price</FormLabel>
          <Input
            name="price"
            type="number"
            value={price}
            min={0}
           
            onChange={(event) => setPrice(event.target.value)}
          >
            
          </Input>
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Image URL</FormLabel>
          <Input name="imageUrl" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Product Category</FormLabel>
          <Input name="category" value={category} onChange={(event) => setCategory(event.target.value)} />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Type</FormLabel>
          <Select name="type" value={type} onChange={(event) => setType(event.target.value)}>
            <option value="">Select Type</option>
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
            <option value="Mobile">Mobile</option>
          </Select>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default AdminAddProduct;
