import React from 'react'
import styles from "./styles/Card.css"
const Card = ({Item}) => {
  return (
    <div className='main'>
      <div className="Cont">
      <div className="container">
        <div className="One">
          <p className="title">Item</p>

          <div className="Price">
            <p>₹</p>
            <p>₹</p>
          </div>

          <p className="green">
            You Saved ₹ 
          </p>

          <div className="Select">
            <select name="Sizes" id="">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">2XL</option>
              <option value="">3XL</option>
            </select>
            <select
            //   value={Item.qty.toString()}
              name=""
              id=""
              
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="Two">
          {/* <img src={Item.images[0]} alt="" /> */}
        </div>
      </div>
      <div className="Options">
        <button >REMOVE</button>
        <button>MOVE TO WISHLIST</button>
      </div>
      </div>
    </div>
  )
}

export default Card
