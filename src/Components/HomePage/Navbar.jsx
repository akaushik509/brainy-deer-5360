import { Box, Button,Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    DrawerCloseButton, Center, Icon, Flex, Image, Input, Show, InputGroup, InputLeftElement, Text, HStack, Popover, PopoverContent, PopoverTrigger, useDisclosure, VStack, Grid, Stack, Divider, Avatar, Heading } from '@chakra-ui/react'
import { ArrowDownIcon, Search2Icon } from '@chakra-ui/icons'
import { FaHeart } from "react-icons/fa";
import { TiShoppingBag, TiThMenu } from "react-icons/ti";

import { NavLink } from "react-router-dom";

import React, {useEffect, useState} from 'react';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = useState('left')

    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    const ProfilePic = localStorage.getItem('ProfilePic');
    const emailid = localStorage.getItem('emailid');
    const mobile = localStorage.getItem('mobile');
    let isLoggedIn = !!token; // Check if token exists

    const logoutfunction=()=>{
        localStorage.setItem('token', "");
        localStorage.setItem('userName', "");
        localStorage.setItem('ProfilePic',"");
        localStorage.setItem('emailid',"");
        localStorage.setItem('mobile',"");
        const token = localStorage.getItem('token');
        
        isLoggedIn = !!token; // Check if token exists
    }
    

  return (
    <>          
        <Show breakpoint='(min-width: 1080px)' >
            <Box bg="#EEEEEE" >
                <Center>
                    <Flex w="75%" h={"20px"} justifyContent={"space-between"}>
                        <Flex  >
                            <Center>
                                <Button bg={"white.500"} h={"5px"}>Offers</Button>
                                <Button bg={"white.500"} h={"5px"}>Fanbook</Button>
                                <Button bg={"white.500"} h={"5px"}><ArrowDownIcon/>Download App</Button>
                                <Button bg={"white.500"} h={"5px"}>TriBe Membership</Button>
                            </Center>
                        </Flex>
                        <Flex>
                            <Center>
                                <Button bg={"white.500"} h={"5px"}>Contact Us</Button>
                                <Button bg={"white.500"} h={"5px"}>Track Order</Button>
                            </Center>
                        </Flex>
                    </Flex>
                </Center>
            </Box>
        </Show>
        
        <Show breakpoint='(min-width: 1080px)' >
            <Box bg="white" borderBottom={"1px"} position="sticky" top={0}  zIndex="9999999999999999999999999">
                <Center>
                    <Flex w="75%" h={"50px"} justifyContent={"space-between"}>
                        <Flex>
                            <Center>
                                <NavLink to="/"><Image h={"40px"} alt="logo.png" src={`/Images/logo.png`}/></NavLink>
                                <Button bg={"white.500"} _hover={{ bg: "white.500" }} fontFamily="cursive">Trendy Treasures</Button>

                                {/* MEN */}
                                <Popover
                                
                                onOpen={onOpen}
                                onClose={onClose}
                                placement="bottom-start"
                                trigger="hover"
                                closeOnBlur={false}
                                >
                                <PopoverTrigger>
                                    <Button onMouseEnter={onOpen} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ borderBottomColor: "yellow.500" }}>MEN</Button>
                                </PopoverTrigger>
                                <PopoverContent p={5} w={"100%"} gap="50px" border={"1px solid gray"} >
                                    {/* Add your mega menu content here */}
                                    <Grid templateColumns="repeat(5,1fr)" gap={20} alignItems="left" justifyContent={"left"} >
                                        <VStack>
                                            <Text fontWeight={"bold"}>TOPWEAR</Text>
                                            <Text><NavLink to="/">Printed T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Oversized T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Plain T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Fashion T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Activewear T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Full Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Half Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Vests</NavLink></Text>
                                            <Text><NavLink to="/">Co-ord Sets</NavLink></Text>
                                            <Text><NavLink to="/">Kurtas</NavLink></Text>
                                            <Text><NavLink to="/">Henleys</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size Topwear</NavLink></Text>
                                            <Text><NavLink to="/">Polo T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Jackets</NavLink></Text>
                                            <Text><NavLink to="/">Sweaters</NavLink></Text>
                                        </VStack>
                                        <VStack>
                                            <Text fontWeight={"bold"}>BOTTOMWEAR</Text>
                                            <Text><NavLink to="/">Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Pyjamas</NavLink></Text>
                                            <Text><NavLink to="/">Shrts</NavLink></Text>
                                            <Text><NavLink to="/">Jeans & Denims</NavLink></Text>
                                            <Text><NavLink to="/">Boxers</NavLink></Text>
                                            <Text><NavLink to="/">Briefs</NavLink></Text>
                                            <Text><NavLink to="/">Trunks</NavLink></Text>
                                            <Text><NavLink to="/">Hipster & Pants</NavLink></Text>
                                            <Text><NavLink to="/">Activewear Shorts</NavLink></Text>
                                            <Text><NavLink to="/">Activewear Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size Bottomwear</NavLink></Text>
                                            <Text><NavLink to="/">All Bottomwear</NavLink></Text>
                                        </VStack>
                                        <VStack>
                                            <Text fontWeight={"bold"}>WINTERWEAR</Text>
                                            <Text><NavLink to="/">Sweatshirts & Hoodies</NavLink></Text>
                                            <Text><NavLink to="/">Jackets</NavLink></Text>
                                            <Text><NavLink to="/">Sweaters</NavLink></Text>
                                            <Text><NavLink to="/">Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Full Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size</NavLink></Text>
                                        </VStack>
                                        <Divider orientation="vertical" backgroundColor="gray.500" w="3px"/>
                                        <VStack marginLeft={"-200px"} alignItems="left">
                                            <Text fontWeight={"bold"}>Special</Text>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png" name="men"/>
                                                    <Text><NavLink to="/">Designs of the Week</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/icon-168-1668158001.png" name="men"/>
                                                    <Text><NavLink to="/">Anime Flashout</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png" name="men"/>
                                                    <Text><NavLink to="/">Streetwear Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-color-splash-1663442159.png" name="men"/>
                                                    <Text><NavLink to="/">Space Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png" name="men"/>
                                                    <Text><NavLink to="/">Pokemon Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/new-icon--1658215268.png" name="men"/>
                                                    <Text><NavLink to="/">Colour Splash Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                        </VStack>
                                    </Grid>
                                </PopoverContent>
                                </Popover>

                                {/* WOMEN */}
                                <Popover
                                
                                onOpen={onOpen}
                                onClose={onClose}
                                placement="bottom-start"
                                trigger="hover"
                                closeOnBlur={false}
                                >
                                <PopoverTrigger>
                                    <Button onMouseEnter={onOpen} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ borderBottomColor: "yellow.500" }}>WOMEN</Button>
                                </PopoverTrigger>
                                <PopoverContent p={5} w={"100%"} gap="50px" border={"1px solid gray"} >
                                    {/* Add your mega menu content here */}
                                    <Grid templateColumns="repeat(5,1fr)" gap={20} alignItems="left" justifyContent={"left"} >
                                        <VStack>
                                            <Text fontWeight={"bold"}>TOPWEAR</Text>
                                            <Text><NavLink to="/">Printed T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Oversized T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Plain T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Fashion T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Activewear T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Full Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Half Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Vests</NavLink></Text>
                                            <Text><NavLink to="/">Co-ord Sets</NavLink></Text>
                                            <Text><NavLink to="/">Kurtas</NavLink></Text>
                                            <Text><NavLink to="/">Henleys</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size Topwear</NavLink></Text>
                                            <Text><NavLink to="/">Polo T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Jackets</NavLink></Text>
                                            <Text><NavLink to="/">Sweaters</NavLink></Text>
                                        </VStack>
                                        <VStack>
                                            <Text fontWeight={"bold"}>BOTTOMWEAR</Text>
                                            <Text><NavLink to="/">Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Pyjamas</NavLink></Text>
                                            <Text><NavLink to="/">Shrts</NavLink></Text>
                                            <Text><NavLink to="/">Jeans & Denims</NavLink></Text>
                                            <Text><NavLink to="/">Boxers</NavLink></Text>
                                            <Text><NavLink to="/">Briefs</NavLink></Text>
                                            <Text><NavLink to="/">Trunks</NavLink></Text>
                                            <Text><NavLink to="/">Hipster & Pants</NavLink></Text>
                                            <Text><NavLink to="/">Activewear Shorts</NavLink></Text>
                                            <Text><NavLink to="/">Activewear Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size Bottomwear</NavLink></Text>
                                            <Text><NavLink to="/">All Bottomwear</NavLink></Text>
                                        </VStack>
                                        <VStack>
                                            <Text fontWeight={"bold"}>WINTERWEAR</Text>
                                            <Text><NavLink to="/">Sweatshirts & Hoodies</NavLink></Text>
                                            <Text><NavLink to="/">Jackets</NavLink></Text>
                                            <Text><NavLink to="/">Sweaters</NavLink></Text>
                                            <Text><NavLink to="/">Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Full Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size</NavLink></Text>
                                        </VStack>
                                        <Divider orientation="vertical" backgroundColor="gray.500" w="3px"/>
                                        <VStack marginLeft={"-200px"} alignItems="left">
                                            <Text fontWeight={"bold"}>Special</Text>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png" name="men"/>
                                                    <Text><NavLink to="/">Designs of the Week</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/icon-168-1668158001.png" name="men"/>
                                                    <Text><NavLink to="/">Anime Flashout</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png" name="men"/>
                                                    <Text><NavLink to="/">Streetwear Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-color-splash-1663442159.png" name="men"/>
                                                    <Text><NavLink to="/">Space Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png" name="men"/>
                                                    <Text><NavLink to="/">Pokemon Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/new-icon--1658215268.png" name="men"/>
                                                    <Text><NavLink to="/">Colour Splash Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                        </VStack>
                                    </Grid>
                                </PopoverContent>
                                </Popover>
                                
                                {/* MOBILE COVER */}
                                <Popover
                                
                                onOpen={onOpen}
                                onClose={onClose}
                                placement="bottom-start"
                                trigger="hover"
                                closeOnBlur={false}
                                >
                                <PopoverTrigger>
                                    <Button onMouseEnter={onOpen} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ borderBottomColor: "yellow.500" }}>MOBILE COVER</Button>
                                </PopoverTrigger>
                                <PopoverContent p={5} w={"100%"} gap="50px" border={"1px solid gray"} >
                                    {/* Add your mega menu content here */}
                                    <Grid templateColumns="repeat(5,1fr)" gap={20} alignItems="left" justifyContent={"left"} >
                                        <VStack>
                                            <Text fontWeight={"bold"}>TOPWEAR</Text>
                                            <Text><NavLink to="/">Printed T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Oversized T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Plain T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Fashion T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Activewear T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Full Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Half Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Vests</NavLink></Text>
                                            <Text><NavLink to="/">Co-ord Sets</NavLink></Text>
                                            <Text><NavLink to="/">Kurtas</NavLink></Text>
                                            <Text><NavLink to="/">Henleys</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size Topwear</NavLink></Text>
                                            <Text><NavLink to="/">Polo T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Jackets</NavLink></Text>
                                            <Text><NavLink to="/">Sweaters</NavLink></Text>
                                        </VStack>
                                        <VStack>
                                            <Text fontWeight={"bold"}>BOTTOMWEAR</Text>
                                            <Text><NavLink to="/">Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Pyjamas</NavLink></Text>
                                            <Text><NavLink to="/">Shrts</NavLink></Text>
                                            <Text><NavLink to="/">Jeans & Denims</NavLink></Text>
                                            <Text><NavLink to="/">Boxers</NavLink></Text>
                                            <Text><NavLink to="/">Briefs</NavLink></Text>
                                            <Text><NavLink to="/">Trunks</NavLink></Text>
                                            <Text><NavLink to="/">Hipster & Pants</NavLink></Text>
                                            <Text><NavLink to="/">Activewear Shorts</NavLink></Text>
                                            <Text><NavLink to="/">Activewear Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size Bottomwear</NavLink></Text>
                                            <Text><NavLink to="/">All Bottomwear</NavLink></Text>
                                        </VStack>
                                        <VStack>
                                            <Text fontWeight={"bold"}>WINTERWEAR</Text>
                                            <Text><NavLink to="/">Sweatshirts & Hoodies</NavLink></Text>
                                            <Text><NavLink to="/">Jackets</NavLink></Text>
                                            <Text><NavLink to="/">Sweaters</NavLink></Text>
                                            <Text><NavLink to="/">Joggers</NavLink></Text>
                                            <Text><NavLink to="/">Full Sleeve T-Shirts</NavLink></Text>
                                            <Text><NavLink to="/">Plus Size</NavLink></Text>
                                        </VStack>
                                        <Divider orientation="vertical" backgroundColor="gray.500" w="3px"/>
                                        <VStack marginLeft={"-200px"} alignItems="left">
                                            <Text fontWeight={"bold"}>Special</Text>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png" name="men"/>
                                                    <Text><NavLink to="/">Designs of the Week</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/icon-168-1668158001.png" name="men"/>
                                                    <Text><NavLink to="/">Anime Flashout</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png" name="men"/>
                                                    <Text><NavLink to="/">Streetwear Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/Circle-icon-color-splash-1663442159.png" name="men"/>
                                                    <Text><NavLink to="/">Space Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png" name="men"/>
                                                    <Text><NavLink to="/">Pokemon Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                            <Flex >
                                                <Center gap={"30px"}>
                                                    <Avatar src="https://images.bewakoof.com/nav_menu/new-icon--1658215268.png" name="men"/>
                                                    <Text><NavLink to="/">Colour Splash Collection</NavLink></Text>
                                                </Center>
                                            </Flex>
                                        </VStack>
                                    </Grid>
                                </PopoverContent>
                                </Popover>
                            </Center>
                        </Flex>
                        <Flex>
                            <Center>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<Search2Icon color='gray.300' />}
                                    
                                    />
                                    <Input bg="#EAEAEA" w={"400px"} focusBorderColor="black.100" type='text' placeholder='Search by product, category or collection' />
                                </InputGroup>
                                <Text bg={"white.500"} _hover={{ bg: "white.500" }}>|</Text>

                                {
                                    isLoggedIn?(
                                    <Popover
                                    onOpen={onOpen}
                                    onClose={onClose}
                                    placement="bottom-start"
                                    trigger="hover"
                                    closeOnBlur={false}
                                    >
                                    <PopoverTrigger>
                                        <Button  bg={"white.500"} borderBottom="2px solid transparent"><Avatar size="sm" objectFit="cover" src={ProfilePic}/></Button>
                                    </PopoverTrigger>
                                    <PopoverContent width="auto" gap="3px" padding="5px" >
                                        <Button><Text fontSize={"sm"}>Hello, {userName}</Text></Button>
                                        <Button><NavLink to="/myaccount">My Account</NavLink></Button>
                                        <Button><NavLink to="/order">Orders</NavLink></Button>
                                        <Button onClick={()=>{logoutfunction()}}><NavLink to="/">Logout</NavLink></Button>
                                    </PopoverContent>
                                    </Popover>) :
                                    (
                                        <Popover
                                        onOpen={onOpen}
                                        onClose={onClose}
                                        placement="bottom-start"
                                        trigger="hover"
                                        closeOnBlur={false}
                                        >
                                        <PopoverTrigger>
                                            <Button onMouseEnter={onOpen} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ borderBottomColor: "yellow.500" }}>Login</Button>
                                        </PopoverTrigger>
                                        <PopoverContent width="auto" gap="3px" padding="5px" >
                                            <Button><NavLink to="/login">User Login</NavLink></Button>
                                            <Button><NavLink to="/">Admin Login</NavLink></Button>
                                        </PopoverContent>
                                        </Popover>
                                    )
                                }
                                
                                {/* <Popover
                                onOpen={onOpen}
                                onClose={onClose}
                                placement="bottom-start"
                                trigger="hover"
                                closeOnBlur={false}
                                >
                                <PopoverTrigger>
                                    <Button onMouseEnter={onOpen} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ borderBottomColor: "yellow.500" }}>Login</Button>
                                </PopoverTrigger>
                                <PopoverContent width="auto" gap="3px" padding="5px" >
                                    <Button><NavLink to="/login">User Login</NavLink></Button>
                                    <Button><NavLink to="/">Admin Login</NavLink></Button>
                                </PopoverContent>
                                </Popover> */}
                                
                                <Button bg={"white.500"} _hover={{ bg: "white.500" }}><NavLink to="/cart"><Icon as={FaHeart} color="black.500" boxSize={6} /></NavLink></Button>
                                <Button bg={"white.500"} _hover={{ bg: "white.500" }}><NavLink to="/order"><Icon as={TiShoppingBag} boxSize={6} color="gray.500" /></NavLink></Button>
                            </Center>
                        </Flex>
                    </Flex>
                </Center>
            </Box>
        </Show>

        

        {/* Navbar medium and small screen */}
        
        <Show breakpoint='(max-width: 992px)'>
            <Box bg="#FDD835" borderBottom={"1px"} >
                    <Flex h={"50px"} justifyContent={"space-between"} >
                        <Flex marginLeft={"10px"} justifyItems={"center"} alignItems="center" gap="10px" >
                            <Icon as={TiThMenu} boxSize={6} onClick={onOpen}/>
                            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay />
                                <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader borderBottomWidth='1px'>{isLoggedIn?(`Hello ${userName}`):("Login")}</DrawerHeader>
                                <DrawerBody>
                                    <Stack gap="15px">
                                        <Text size={"5px"} color="gray.500">SHOP IN</Text>
                                        <Text fontWeight={"bold"}><NavLink to="/">Men</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/">Women</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/myaccount">Accessories</NavLink></Text>
                                        <Flex>
                                            <Center justifyContent={"space-between"} w="100%">
                                                <Text fontWeight={"bold"}><NavLink to="/" >Designs of the Week</NavLink></Text>
                                                <Avatar size="sm" src="https://images.bewakoof.com/nav_menu/new-icon--1658215268.png" name="men"/>
                                            </Center>
                                        </Flex>
                                        <Text fontWeight={"bold"}><NavLink to="/">Specials</NavLink></Text>
                                        <Flex>
                                            <Center  justifyContent={"space-between"} w="100%" >
                                                <Text fontWeight={"bold"}><NavLink to="/" >Customise your own T-Shirt</NavLink></Text>
                                                <Avatar size="sm" src="https://images.bewakoof.com/nav_menu/bewakoof-refer-and-earn-icon-1610446099.png" name="men"/>
                                            </Center>
                                        </Flex>
                                        <Text size={"5px"} color="gray.500">ENGAGE</Text>
                                        <Text fontWeight={"bold"}><NavLink to="/">Vote for Designs</NavLink></Text>
                                        <Flex>
                                            <Center  justifyContent={"space-between"} w="100%" >
                                                <Text fontWeight={"bold"}><NavLink to="/" >Refer and Earn</NavLink></Text>
                                                <Avatar size="sm" src="https://images.bewakoof.com/nav_menu/bewakoof-refer-and-earn-icon-1610446099.png" name="men"/>
                                            </Center>
                                        </Flex>
                                        <Flex>
                                            <Center  justifyContent={"space-between"} w="100%" >
                                                <Text fontWeight={"bold"}><NavLink to="/" >TriBe Membership</NavLink></Text>
                                                <Avatar size="sm" src="https://images.bewakoof.com/nav_menu/tribe-navigation-icon-1565187343.png" name="men"/>
                                            </Center>
                                        </Flex>
                                        <Divider orientation="horizontal" border={"1px solid gray"}/>
                                        <Text size={"5px"} color="gray.500">MY PROFILE</Text>
                                        <Text fontWeight={"bold"}><NavLink to="/myaccount" >My Account</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/order" >My Orders</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >My Wallet</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >My Wishlist</NavLink></Text>
                                        <Text size={"5px"} color="gray.500">CONTACT US</Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >Help & Support</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >Feedback & Suggestions</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >Become a Seller</NavLink></Text>
                                        <Text size={"5px"} color="gray.500">ABOUT US</Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >Our Story</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >Fanbook</NavLink></Text>
                                        <Text fontWeight={"bold"}><NavLink to="/" >Blog</NavLink></Text>

                                        <Text fontWeight={"bold"}><NavLink to="/" >Logout</NavLink></Text>
                                                                                 
                                    </Stack>
                                    
                                </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                            
                            <NavLink to="/"><Image h={"40px"} alt="logo.png" src={`/Images/logo.png`}/></NavLink>
                        </Flex>

                        {
                            isLoggedIn?(
                                <Flex> 
                                        <Menu>
                                        {({ isOpen }) => (
                                            <>
                                            <MenuButton isActive={isOpen} as={Button} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ backgroundColor:"#FDD835" }} >
                                                <Text>{userName}</Text>
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem><NavLink to="/myaccount">My Account</NavLink></MenuItem>
                                                <MenuItem><NavLink to="/order">Orders</NavLink></MenuItem>
                                                <MenuItem onClick={()=>{logoutfunction()}}><NavLink to="/">Logout</NavLink></MenuItem>
                                            </MenuList>
                                            </>
                                        )}
                                        </Menu>
                                        
                                        <Button bg={"white.500"} _hover={{ bg: "white.500" }}><NavLink to="/cart"><Icon as={FaHeart} color="black.500" boxSize={6} /></NavLink></Button>
                                        <Button bg={"white.500"} _hover={{ bg: "white.500" }}><NavLink to="/order"><Icon as={TiShoppingBag} boxSize={6} color="gray.500" /></NavLink></Button>
                                    
                                </Flex>

                            ):(
                                <Flex> 
                                <Menu>
                                {({ isOpen }) => (
                                    <>
                                    <MenuButton isActive={isOpen} as={Button} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ backgroundColor:"#FDD835" }} >
                                        {isOpen = 'Login'}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><NavLink to="/login">User Login</NavLink></MenuItem>
                                        <MenuItem><NavLink to="/admin">Admin Login</NavLink></MenuItem>
                                    </MenuList>
                                    </>
                                )}
                                </Menu>
                                
                                <Button bg={"white.500"} _hover={{ bg: "white.500" }}><NavLink to="/cart"><Icon as={FaHeart} color="black.500" boxSize={6} /></NavLink></Button>
                                <Button bg={"white.500"} _hover={{ bg: "white.500" }}><NavLink to="/order"><Icon as={TiShoppingBag} boxSize={6} color="gray.500" /></NavLink></Button>
                            
                        </Flex>

                            )
                        }

                        {/* <Flex> 
                                <Menu>
                                {({ isOpen }) => (
                                    <>
                                    <MenuButton isActive={isOpen} as={Button} bg={"white.500"} borderBottom="2px solid transparent" _hover={{ backgroundColor:"#FDD835" }} >
                                        {isOpen = 'Login'}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><NavLink to="/login">User Login</NavLink></MenuItem>
                                        <MenuItem><NavLink to="/admin">Admin Login</NavLink></MenuItem>
                                    </MenuList>
                                    </>
                                )}
                                </Menu>
                                
                                <Button bg={"white.500"} _hover={{ bg: "white.500" }}><Icon as={FaHeart} color="black.500" boxSize={6} /></Button>
                                <Button bg={"white.500"} _hover={{ bg: "white.500" }}><Icon as={TiShoppingBag} boxSize={6} color="gray.500" /></Button>
                            
                        </Flex> */}

                    </Flex>
                
            </Box>
        </Show>

        <Flex h="60px" >
            <Box  w={{sm: '5px', md: '400px', lg: '800px'}}  margin="auto" >
                <Center justifyContent="space-evenly">
                <Button bg={"white.500"} _hover={{bg:"white.500"}} ><NavLink to="/mens">MEN</NavLink></Button>
                <Button bg={"white.500"} _hover={{bg:"white.500"}} ><NavLink to="/login">WOMEN</NavLink></Button>
                <Button bg={"white.500"} _hover={{bg:"white.500"}} ><NavLink to="/myaccount">ACCESSORIES</NavLink></Button>
                </Center>
            </Box>
        </Flex>


    </>
  )
}

export default Navbar