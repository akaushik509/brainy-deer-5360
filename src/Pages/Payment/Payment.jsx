import React from "react";
import styles from "./styles/Pay.module.css";
import Navigator from "./Navigator";
import Card from "./Card";
import Table from "./Table";
// import Footer from "../Components/Home/Footer";
import { useSelector } from "react-redux";

const Payment = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <div className={styles.container}>
        <div>
          <h5 className={styles.Heading}>Choose your payment method</h5>
          <Navigator />
        </div>
        <div>
          {/* <div className={styles.Header}>
            <h6 className={styles.Heading}>Items You are paying for</h6>
          </div> */}

          {cart.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          {/* <Table /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Payment;
