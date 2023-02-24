import React from 'react'
import Card from './Card'
import styles from "./styles/Cart.css"
// import Table from './Table'
import Table1 from './Table1'
const Cart = () => {
  return (
    <div>
      <div className='header'>
            <div>
            <img src="https://images.bewakoof.com/web/ic-desktop-trademark-bwkf-logo.svg" alt="bewakoof" />
            </div>
            <div>
                <p>Signed As <br /> viratganesh039@gmail.com</p>
            </div>
        </div>
        <hr />
        {/* <Table /> */}
        <Card />
        <Table1 />
    </div>
  )
}

export default Cart
