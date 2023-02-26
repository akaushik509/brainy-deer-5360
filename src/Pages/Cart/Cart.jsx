import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Allcards from "../../Components/Cart/AllCards";
// import Card from "../Cart/Card";
import Other2 from "../../Components/Cart/Other2";
import Others from "../../Components/Cart/Others";
// import Table from "../../Components/Cart/Table";
import Tribe from "../../Components/Cart/Tribe";
import { Circles } from "react-loader-spinner";
import { getCartApi } from "../../Redux/Cart/Cart.actions";
import styles from "../../Components/Cart/styles/Card.module.css";
import { Tbody, Td, Tr, Button, Thead, Table, Th, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Cart = () => {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState();

  const { loading, error } = useSelector((state) => state.cart);
  // const { token } = useSelector((state) => state.auth.data);

  useEffect(() => {
    // dispatch(getCartApi())
    getCart();
  }, []);
  const getCart = () =>{
    return fetch("https://grumpy-lingerie-foal.cyclic.app/cart/getcart",{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(res=>{
        console.log(res)
        setCartData(res)
    })
    .catch(err=>console.log(err)) 
};
const removeFromCart=(productId)=>{
  fetch(`https://grumpy-lingerie-foal.cyclic.app/cart/removefromcart/${productId}`,{
      method:"DELETE",
      headers:{
          "Content-Type": "application/json",
          "Authorization":localStorage.getItem("token")
      }
  }).then((res) => {
      res.json()
      setCartData(res.data)
      getCart();
     
  })
  
}
const orderall=()=>{
  fetch(`https://grumpy-lingerie-foal.cyclic.app/myorder/cartitem/`,{
      method:"POST",
      body:JSON.stringify(),
      headers:{
          "Content-Type": "application/json",
          "Authorization":localStorage.getItem("token")
      }
  }).then((res) => {
      res.json()
      getCart()
  })
}

  if (loading) {
    return (
      <div className={styles.Loader}>
        <Circles
          height="650"
          width="150"
          color="#f6d951"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.Loader}>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.single}>
          <Others />
          <Other2 />
          {/* <Allcards /> */}
        </div>
        <Link to={"/address"}>
        <Flex justifyContent="flex-end" mt={4} >
        <Button colorScheme="blue" onClick={orderall} >
          Order All
        </Button>
      </Flex>
        </Link>
        <Table variant="simple" size="sm" >
      <Thead>
        <Tr>
          <Th>Product Name</Th>
          <Th>Price</Th>
          <Th>Remove</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cartData && cartData?.map(item => (
          <Tr key={Date.now()}>
            <Td>{item.name}</Td>
            <Td>${item.price.toFixed(2)}</Td>
            <Td>
              <Button colorScheme="red" size="sm" onClick={() => removeFromCart(item._id)}>Remove</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
        <div className={styles.double}>
          {/* <Tribe /> */}
          {/* <Table /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
