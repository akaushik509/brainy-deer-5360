import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Pages/Cart/Address";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home";
import MensPage from "../Pages/MensPage";
import MyAccount from "../Pages/MyAccount";
import Order from "../Pages/Order";

import Payment from "../Pages/Payment/Payment";
import WomensPage from "../Pages/WomensPage";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route> 
      <Route path="/mens" element={<MensPage/>} />
      <Route path="/womens" element={<WomensPage/>} />
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/address" element={<Address />}/>
      <Route path="/payment" element={<Payment/>}></Route>  
      <Route path="/myaccount" element={<MyAccount/>} />
      <Route path="/order" element={<Order/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
