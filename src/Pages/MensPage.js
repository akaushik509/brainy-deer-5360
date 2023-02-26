import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts, addToCart, addToWishlist } from "../Redux/action";
import { AiOutlineHeart } from "react-icons/ai"
import { BsFillCartPlusFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi"
import "../CSS/Mens.css";
import Sidebar from "../Components/Sidebar";
import { Flex,Text,Select,Input,Button } from "@chakra-ui/react";
const MensPage = () => {
/*   const {products} = useSelector((store) => store.products);

  console.log(products)

  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams(); */

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all products and categories from the API
    fetch("https://grumpy-lingerie-foal.cyclic.app/prod/search?type=Mens")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Extract all unique categories from the products
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      (searchTerm === "" ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  ); 

  function addToCart(productId) {
    // construct the request body
    var body = {
      productId: productId,
     
    };
    
    // make the request
    fetch('https://grumpy-lingerie-foal.cyclic.app/cart/addtocart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":localStorage.getItem("token")
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }


 /*  useEffect(() => {
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
  }, [location.search, dispatch, products.length, searchParams, location]); */



/*   const handleClick = (id) => {
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
  }; */


  return (
    <div >
      {/* <div className="fixed-sidebar"> */}
      <Flex justify="space-between" align="center" mb="6" w={"70%"} margin={"auto"}>
        <Text fontSize="xl" fontWeight="bold">
          Products
        </Text>
        <Flex align="center">
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            mr="3"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            w="300px"
            mr="3"
          />
          <Button onClick={() => setSearchTerm("")}>Clear</Button>
        </Flex>
      </Flex>
      {/* </div> */}
     
      <div className="Card">
        {filteredProducts &&
          filteredProducts.map((el) => {
            return (
              <div key={el._id}>
                <img src={el.imageUrl} alt="prod_img" />
                <div className="flextext">
                    <div>
                        <h4>{el.brand}</h4>
                        <p>{el.name}</p>
                        <p >
                          <span className="price"><b>₹{el.price}</b> </span>  <span><del>₹{el.oldprice}</del></span> 
                         </p>
                    </div>
                    <div className="icon">
                        <BsFillCartPlusFill onClick={() => addToCart(el._id)} />
                        {/* <AiOutlineHeart onClick={() => handleClick(el.id)} /> */}
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