import { Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Address(){
    const [input, setInput] = useState({
        name:"",
        mobile:"",
        zip:"",
        landwork:"",
    })

    const handleChange = (e) => setInput(e.target.value)
 
    const isError = input === ''
    return (
    <div className="main-div" style={{marginBottom:"60px"}}>        
        <Center><Heading mt={3} mb={3} size="md" >DELIVERY ADDRESS</Heading></Center>
      <FormControl w="50%" m="auto"  isInvalid={isError}>
        <FormLabel>Full name</FormLabel>
        <Input
          type='text'
          onChange={handleChange}
        />
        <FormLabel>Mobile number</FormLabel>
        <Input
          type='number'
          onChange={handleChange}
        />
         <FormLabel>Zip-code</FormLabel>
        <Input
          type='number'
          onChange={handleChange}
        />
         <FormLabel>Flat, House no., Building, Company, Apartment</FormLabel>
        <Input
          type='text'
          onChange={handleChange}
        />
         <FormLabel>Landmark</FormLabel>
        <Input
          type='text'
          onChange={handleChange}
        />
        
        {!isError ? (
          <FormHelperText>
            <Link to={`/payment`}>
           <Button w="100%" colorScheme="blue">CONTINUE</Button>
           </Link>
          </FormHelperText>
        ) : (
          <FormErrorMessage>Fill All Details!</FormErrorMessage>
        )}
      </FormControl>
      </div>

       
    )
}

export default Address