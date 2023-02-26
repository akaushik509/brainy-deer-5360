import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Pages/Cart/Address";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home";
import MensPage from "../Pages/MensPage";
import Payment from "../Pages/Payment/Payment";
// import MyAcoount from "../Pages/MyAcoount";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import WomensPage from "../Pages/WomensPage";
import MobilePage from "../Pages/MobilePage";
// import ProductPage from "../Pages/ProductPage";


function AllRoutes() {
  return (
    <Routes>
       <Route path="/" element={<Home />}></Route>

      {/* <Route path="/login" element={<Register />} /> */}

      {/* <Route path="/productpage" element={<ProductPage/>} /> */}

      <Route path="/mens" element={<MensPage/>} />
      <Route path="/womens" element={<WomensPage/>} />
       <Route path="/mobile" element={<MobilePage/>} />
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/address" element={<Address />}/>
      <Route path="/payment" element={<Payment/>}></Route>
      {/* <Route path="/myaccount" element={<MyAcoount/>} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      

    </Routes>
  );
}

export default AllRoutes;
