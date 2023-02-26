import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import SuccessModal from "../Login/Modal";
import styles from "./styles/nav.module.css";
import { Link, useNavigate } from "react-router-dom";

const CardNo = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    card: "",
    cvv: "",
    date: "",
  });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(formValues);
  };
  const handleClose = () => {
    setShow(false);
    navigate("/categories");
  };

  return (
    <div className="main-caontainer">
      {/* <SuccessModal
        show={show}
        handleClose={handleClose}
        message={"Your Payment Was Successfully completed "}
      /> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className={styles.flex} controlId="formBasicEmail">
          <Form.Label ></Form.Label>
          <Form.Control
            // style={styles.inp}
            type="number"
            placeholder="Card Number"
            name="card"
            required
            onChange={handleChange}
          />
        </Form.Group>

        <div className={styles.flex}>
          <Form.Group className="mb-3" >
            <Form.Label ></Form.Label>
            <Form.Control
              type="text"
              placeholder="Expiry Date"
              name="date"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Cvv"
              name="cvv"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <Form.Group className={styles.flex}>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Name On Card"
            name="name"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Save card details for later"
            checked={true}
            readOnly
          />
        </Form.Group>
        <p>
          This transaction you make is totally secure. We don't save your CVV
          number.
        </p>
        <Link to={"/"}>
        <button type="submit" className={styles.btton}>
          Pay
        </button>
        </Link>
      </Form>
    </div>
  );
};

export default CardNo;
