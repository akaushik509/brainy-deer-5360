import React from "react";
import { Button, ButtonGroup, Textarea } from "@chakra-ui/react";
import styles from "./styles/Table1.css";

const Table1 = () => {
  return (
    <div>
      <div className="box-header">
        <div>
          <Button backgroundColor={"yellow"} width={"90%"}>
            save Extra 40 with Tribe
          </Button>
        </div>
        <div className="whistle">
          <p>
            Whistles! Get extra 10% cashback on all prepaid orders above Rs.499.
            Use Code - PREP10.
          </p>
        </div>
        <div>
          <Button
            backgroundColor={"42a2a1"}
            width={"90%"}
            textAlign={"start"}
            marginTop={"20px"}
            color={"#42a2a2"}
          >
            Apply Coupon / Gift Card / Refferal
          </Button>
          <div>
            <table className="Table">
              <thead>
                <tr>
                  <td>PRICE SUMMARY</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Items</td>
                  <td>length</td>
                </tr>
                <tr>
                  <td>Shipping Charges </td>
                  <td classNamestyles="green">FREE</td>
                </tr>
                <tr className="bolder">
                  <td>SubTotal</td>
                  <td>RS.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          
          <hr />
          <br />
          <div className="total">
            <div className="total-price">
                Total
            </div>
            <div className="button">
                <Button backgroundColor={"#42a2a2"} width={"100%"}>Continue</Button>
            </div>
            <div>
                <img src="https://images.bewakoof.com/web/cart-badge-trust.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;
