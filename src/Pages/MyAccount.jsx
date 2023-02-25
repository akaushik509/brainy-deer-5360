import { Heading, Box, Text, Button, Flex, FormControl,
    FormLabel, Input,Alert,AlertIcon,
    FormErrorMessage,useToast,
    FormHelperText,
    Avatar,
    Center, } from '@chakra-ui/react';
import axios from 'axios';
import React,{ useState, useEffect } from 'react'





  const toggleUserData = (id, formData) => {
    return fetch(
      `https://grumpy-lingerie-foal.cyclic.app/User-Details/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ Phone: formData.mobile, Address: formData.address })
      }
    ).then((res) => res.json());
  };

const MyAccount = () => {
    const [user, setUser] = useState([]);
    const toast = useToast()
    const userName = localStorage.getItem('userName');
    const ProfilePic = localStorage.getItem('ProfilePic');
    const emailid = localStorage.getItem('emailid');
    const mobile = localStorage.getItem('mobile');
    const [formData, setFormData] = useState({address:user.Address, phone:user.Phone});
    
    

    const getData = (userid) => {
      return fetch(
        `https://grumpy-lingerie-foal.cyclic.app/User-Details/${userid}`
      ).then((res) => res.json());
    };
    useEffect(() => {
      let userid = localStorage.getItem("user_id");
      
      getData(userid).then((res) => {
            console.log(res)
            setUser(res)}); 
    }, []);  

    const handleChange = (e) => {
        const { value, name } = e.target;    
        setFormData({ ...formData, [name]: value });
      };
    const handleToggle = () => {
        toast({
            title: 'Applied',
            description: "Your data has been changed successfully.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
      };

    const {address, phone} = formData;
  return (
    <div>
        <Box height={"400px"}>
            <Heading id="pf">Personal Information</Heading>
            <Center>
            <Box id="userdetailbox3">
                <Avatar src={ProfilePic} size="2xl" style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}} alt="Error" />
                <Heading size={"md"}>Hello, {userName}</Heading>
            </Box>
            </Center>
            <Center>
            <Box id="userdetailbox1">
                <Box id="userdetailbox2">
                    <FormControl id="form">
                        <FormLabel margin="10px 0px 10px 0px">User Name</FormLabel>
                        <Input  placeholder={userName} disabled={true} />
                        <FormLabel margin="10px 0px 10px 0px">Email Id</FormLabel>
                        <Input type='email' placeholder={emailid} disabled={true} />
                        <FormLabel margin="10px 0px 10px 0px">Address</FormLabel>
                        <Input placeholder={address} name="address" type="text" value="Patna, Bihar" onChange={handleChange} />
                        <FormLabel margin="10px 0px 10px 0px">Mobile</FormLabel>
                        <Input placeholder={mobile} type="number" name="phone" value="9999999999" onChange={handleChange} />
                        <Button colorScheme='teal' margin="20px 0px 10px 0px" onClick={()=>handleToggle()}>Apply Changes</Button>
                        <FormHelperText>We'll never share your Address, Email, Phone Number.</FormHelperText>
                    </FormControl>
                </Box>
            </Box>
            </Center>
            <br />
            <hr />
            <Box>
                <Heading margin="20px 0px 10px 0px" id="pf">FAQs</Heading>
                <Heading size={"sl"}>What happens when I update my email address (or mobile number)?</Heading>
                <Text>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</Text>

                <Heading size={"sl"}>When will my NutriBest account be updated with the new email address (or mobile number)?</Heading>
                <Text>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</Text>

                <Heading size={"sl"}>What happens to my existing NutriBest account when I update my email address (or mobile number)?</Heading>
                <Text>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</Text>

                <Heading size={"sl"}>Does my Seller account get affected when I update my email address?</Heading>
                <Text>NutriBest has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</Text>
            </Box>
            <Box>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" width={"100%"} alt="" />
            </Box>

        </Box>
    </div>
  )
}





export default MyAccount