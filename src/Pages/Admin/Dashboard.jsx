import { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Avatar,
  Center
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //
    const fetchUsers = async () => {
      try {
        await fetch("https://grumpy-lingerie-foal.cyclic.app/admin/allusers",{
            headers:{
                "authbyadmin":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setUsers(res)
            setLoading(false)
        })

       
        
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  return (
    
    <Box >
<Box p={8} >
      <Heading as="h1" mb={8}>
        Dashboard
      </Heading>

      {loading ? (
        <Spinner />
      ) : (
       
            <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign={"center"}>User Name</Th>
              <Th textAlign={"center"}>Email</Th>
              <Th textAlign={"center"}>Profile Pic</Th>
              <Th textAlign={"center"}>No of Product In Cart</Th>
              <Th textAlign={"center"}>No of Product Ordered</Th>
            </Tr>
          </Thead>
          <Tbody >
            {users && users?.map((user) => (
              <Tr key={user._id} >
                <Td textAlign={"center"}>{user.name}</Td>
                <Td textAlign={"center"}>{user.email}</Td>
                <Td textAlign={"center"}><Avatar src={user.imageUrl}/></Td>
                <Td textAlign={"center"}>{user.cart.length}</Td>
                <Td textAlign={"center"}>{user.orders.length}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
     
      )}
    </Box>
    </Box>
    
  )
}

export default Dashboard
