
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "../CSS/Topsidebar.css"
const Topsidebar = () =>{
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialSort = searchParams.getAll("sort");
  const [category, setCategory] = useState(initialCategory || []);
  const [sort, setSort] = useState(initialSort[0] || "");
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleChange = (e) => {
    console.log(e)
    const newCategory = [...category];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort]);
  const {products} = useSelector((store) => store.products);
   return (
    <div className="topsidebar">
       <h1>Filters</h1>
       <h4>Categories</h4>
       <div className="select">
          <select onChange={handleChange} >
            <option value="">All</option>
            <option value="shirt">Shirt</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="jeans">Jeans</option>
            <option value="kurta">Kurta</option>
          </select>
       </div>
       <h4 className="sort">SORT</h4>
        <div onChange={handleSort} className="popular">
          <select name="sortBy">
            <option value="">All</option>
            <option value="asc">Low-to-High</option>
            <option value="desc">High-to-Low</option>
          </select>
       </div>
    </div>
   )
}
export default Topsidebar;