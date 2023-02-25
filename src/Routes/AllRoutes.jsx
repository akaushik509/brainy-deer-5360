import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Pages/Cart/Address";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home";
import MensPage from "../Pages/MensPage";
import Payment from "../Pages/Payment/Payment";
import MyAcoount from "../Pages/MyAcoount";
import WomensPage from "../Pages/WomensPage";
import MobilePage from "../Pages/MobilePage";

function AllRoutes() {
  return (
    <Routes>

       {/* <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Register />} /> */}


       {/* <Route path="/" element={<Home />}></Route> */}
      {/* <Route path="/mens" element={<MensPage/>} /> */}
      <Route path="/womens" element={<WomensPage/>} />
      {/* <Route path="/mobile" element={<MobilePage/>} />
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/address" element={<Address />}/>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/myaccount" element={<MyAcoount/>} /> */}


    </Routes>
  );
}

export default AllRoutes;
