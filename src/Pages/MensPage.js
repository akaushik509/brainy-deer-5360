import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts, addToCart, addToWishlist } from "../Redux/action";
import { AiOutlineHeart } from "react-icons/ai"
import { BsFillCartPlusFill } from "react-icons/bs";
import "../CSS/Mens.css";
import Sidebar from "../Components/Sidebar";
import TopSidebar from "../Components/TopSidebar";
import "../CSS/Topsidebar.css"
const MensPage = () => {
  const {products} = useSelector((store) => store.products);

 // console.log(products)

  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || products.length === 0) {
      const sortBy = searchParams.get("sort")
      const getProductsParams = {
        params: { category: searchParams.getAll("category"),
      _sort: sortBy && "price",
      _order: sortBy,  
    },
      };
      dispatch(getProducts(getProductsParams));
    }
  }, [location.search, dispatch, products.length, searchParams, location]);



  const handleClick = (id) => {
    let FilterData = products.filter((el) => {
      if (el.id === id) {
        return el;
      }
    });

    window.alert("added to wishlist")

    dispatch(addToWishlist(FilterData[0]));
  };
  const handleCart = (id) => {
    let Fill = products.filter((el) => {
      if (el.id === id) {
        return el;
      }
    });
    window.alert("added to cart")
    dispatch(addToCart(Fill[0]));
  };


  return (
    <div className="main">
      <div className="fixed-sidebar">
        <Sidebar />  
      </div>
      
      <div className="Card">
        {products.length > 0 &&
          products.map((el) => {
            return (
              <div key={el.id}>
                <img src={el.image} alt="prod_img" />
                <div className="flextext">
                    <div >
                        <h4>{el.Brand}</h4>
                        <p>{el.name}</p>
                        <p >
                          <span className="price"><b>₹{el.price}</b> </span>  <span><del>₹{el.oldprice}</del></span> 
                         </p>
                    </div>
                    <div className="icon">
                        <BsFillCartPlusFill onClick={() => handleCart(el.id)} />
                        <AiOutlineHeart onClick={() => handleClick(el.id)} />
                    </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MensPage;