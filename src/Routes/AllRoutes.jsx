import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MensPage from "../Pages/Mens";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/mens" element={<MensPage/>} />
    </Routes>
  );
}

export default AllRoutes;
