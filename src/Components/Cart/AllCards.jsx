import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styles from "./styles/Card.module.css";

const Allcards = () => {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();


  return (
    <div>
      {cart && cart?.map((item, index) => (
        <Card key={index} Item={item} />
      ))}
    </div>
  );
};

export default Allcards;
