import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminAddProduct from "../Pages/Admin/AdminAddProduct";
import AdminLogin from "../Pages/Admin/AdminLogin";
import Dashboard from "../Pages/Admin/Dashboard";
import ProductAdmin from "../Pages/Admin/ProductAdmin";
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
      <Route path="/myaccount" element={<MyAccount/>} />
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/admin" element={<Dashboard/>}></Route>
      <Route path="/productadmin" element={<ProductAdmin/>}></Route>
      <Route path="/addproductadmin" element={<AdminAddProduct/>}></Route>      
      <Route path="/womens" element={<WomensPage />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
