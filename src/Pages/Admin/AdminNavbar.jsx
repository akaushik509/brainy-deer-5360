import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    IconButton,
    useColorMode,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'
  import { NavLink } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  
  const AdminNavbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const navigate = useNavigate();
  
    const bgColor = useColorModeValue('gray.100', 'gray.900')
    const color = useColorModeValue('gray.800', 'gray.100')

  /*   let token = localStorage.getItem('token');
    let isLoggedIn = !!token; // Check if token exists */

    const handleLogout = () => {
        localStorage.setItem('token', "");
        navigate("/");
        window.location.reload();
        
    }
  
    return (
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
        bg="#171923"
        color="white"
      >
        <Heading as="h1" size="md">
          TrendyTresures
        </Heading>
  
        <Box display={{ base: 'none', md: 'block' }}>
          <HStack spacing={4}>
            <Button variant="ghost" _hover={{ color: 'yellow.500', backgroundColor: 'transparent' }}><NavLink to="/admin">Dashboard</NavLink></Button>
            <Button variant="ghost" _hover={{ color: 'yellow.500', backgroundColor: 'transparent' }}><NavLink to="/productadmin">All Products</NavLink></Button>
            <Button variant="ghost" _hover={{ color: 'yellow.500', backgroundColor: 'transparent' }}><NavLink to="/addproductadmin">Add Product</NavLink></Button>
           
          </HStack>
        </Box>

        <Box>
            <Button colorScheme="whitw" variant="outline" onClick={handleLogout}>
            Logout
            </Button>
        </Box>

  
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={<ChevronDownIcon />}
            aria-label="Open menu"
            variant="ghost"
            size="lg"
          />
        </Box>
      </Flex>
    )
  }
  
  export default AdminNavbar
  