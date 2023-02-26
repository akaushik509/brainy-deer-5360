import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Pages/Cart/Address";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home";
import MensPage from "../Pages/MensPage";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import WomensPage from "../Pages/WomensPage";
import MobilePage from "../Pages/MobilePage";
import Order from "../Pages/Order";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/mens" element={<MensPage/>} />
       <Route path="/mobile" element={<MobilePage/>} />
      <Route path="/address" element={<Address />}/>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/womens" element={<WomensPage />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<Order/>}></Route>
      {/* <Route path="/myaccount" element={<MyAcoount />} /> */}

    </Routes>
  );
}

export default AllRoutes;
