import { Box, Button, FormControl, FormLabel, Input, Stack, useToast,Heading } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

const AdminLogin = () => {
  const toast = useToast()
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("hello")
      try {
      const response = await axios.post('https://grumpy-lingerie-foal.cyclic.app/admin/login', { email, pass });
      console.log(response.data.token);
      console.log("hello")
      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token); 
        toast({
          title: 'Logged in successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        
        navigate("/admin");
        window.location.reload();
      }

    } catch (error) {
      toast({
        title: 'Logged in successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      console.error(error);
    }
  }
  

  return (
    <Box
      minH="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center" 
    >
      <Box
        borderWidth="1px"
        px={4}
        py={8}
        maxWidth="md"
        w="full"
        borderRadius="md"
        boxShadow="lg" 
      >
        <Box mb={4} >
          <Heading as="h1" textAlign="center" size="lg">
            Admin Login Page
          </Heading>
        </Box>
        <form onSubmit={onSubmit}>
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={pass} onChange={(event) => setPassword(event.target.value)}/>
            </FormControl>

            <Button type="submit" colorScheme="teal" size="lg">
              Sign in
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default AdminLogin
