import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MensPage from "../Pages/MensPage";
import Register from "../Pages/Register";
import WomensPage from "../Pages/WomensPage";

function AllRoutes() {
  return (
    <Routes>
       <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Register />} />
      <Route path="/mens" element={<MensPage/>} />
      <Route path="/womens" element={<WomensPage/>} />
    </Routes>
  );
}

export default AllRoutes;
