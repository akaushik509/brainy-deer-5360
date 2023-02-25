// import React, { useState } from "react";
// import styles from "./styles/Add.module.css";
// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const Address = ({ handleClose }) => {
//   const navigate = useNavigate();
//   const [formValues, setFormValues] = useState({
//     name: "",
//     mobile: "",
//     pin: "",
//     city: "",
//     state: "",
//     address: "",
//     locality: "",
//     landmark: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValues);
//     navigate("/payment");
//   };

//   return (
//     <div>
//       <div className={styles.Container}>
//         <Form onSubmit={handleSubmit}>
//           <div className={styles.Select}>
//             <Form.Label>Select Your Country</Form.Label>
//             <select name="" id="">
//               <option value="India">India</option>
//             </select>
//           </div>
//           <hr />

//           <Form.Group className="mb-3">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Your Full Name"
//               required
//               name="name"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Mobile Number</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Mobile Number"
//               required
//               name="mobile"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <hr />
//           <Form.Group className="mb-3">
//             <Form.Label>Pin code</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Pin code"
//               required
//               name="pin"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <div className={styles.flex}>
//             <Form.Group className="mb-3">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 required
//                 name="city"
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 required
//                 name="state"
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </div>
//           <Form.Group className="mb-3">
//             <Form.Label>Flat no./Building, Street name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Flat no./Building, Street name"
//               required
//               name="address"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Area/Locality</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Area/Locality"
//               required
//               name="locality"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Landmark (Optional)</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Landmark (Optional)"
//               name="landmark"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <div className={styles.opt}>
//             <button type="submit">Continue</button>
//             <button onClick={handleClose}>Cancel</button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Address;
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
    // const [formValues, setFormValues] = useState({
    //         name: "",
    //         mobile: "",
    //         pin: "",
    //         city: "",
    //         state: "",
    //         address: "",
    //         locality: "",
    //         landmark: "",
    //       });

    const handleChange = (e) => setInput(e.target.value)
    // setFormValues({ ...formValues, [name]: value });
    // const handleChange = (e) => {
    //         const { name, value } = e.target;
    //         setFormValues({ ...formValues, [name]: value });
    //       };
  
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