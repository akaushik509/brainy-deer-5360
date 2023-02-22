import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MensPage from "../Pages/MensPage";
import Register from "../Pages/Register";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Register />} />
      <Route path="/mens" element={<MensPage/>} />
    </Routes>
  );
}

export default AllRoutes;
