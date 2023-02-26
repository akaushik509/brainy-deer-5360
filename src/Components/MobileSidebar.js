import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "../CSS/sidebarStyles.css";
const MobileSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("brand");
  const initialSort = searchParams.getAll("sort");
  const [category, setCategory] = useState(initialCategory || []);
  const [sort, setSort] = useState(initialSort[0] || "");
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleChange = (e) => {
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
    <div className="sidebar-container">
      <p className="heading">
        Men Clothing <span>( {products.length} )</span>
        <hr />
      </p>

      <div className="inside-container">
        <div>
          <h4>FILTERS</h4>
          <div className="category">
            <p>Brand</p>
            <div>
              <input
                type="checkbox"
                value="Bewakoof"
                onChange={handleChange}
                checked={category.includes("Bewakoof")}
              />
              <label>Bewakoof</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Apple"
                onChange={handleChange}
                checked={category.includes("Apple")}
              />
              <label>Apple</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="One Plus"
                onChange={handleChange}
                checked={category.includes("One Plus")}
              />
              <label>One Plus</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Xiaomi"
                onChange={handleChange}
                checked={category.includes("Xiaomi")}
              />
              <label>Xiaomi</label>
            </div>
          </div>
        </div>
        <h4>SORT</h4>
        <div onChange={handleSort}>
          {/* <select name="sortBy">
            <option value="">Popular</option>
            <option value="asc">Low-to-High</option>
            <option value="desc">High-to-Low</option>
          </select> */}

          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sort === "asc"}
          />
          <label>Low-to-High</label>
          <br />
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sort === "desc"}
          />
          <label>High-to-Low</label>
          <br/>
          <input
            type="radio"
            value=""
            name="sortBy"
            defaultChecked={sort === ""}
          />
          
          <label>Default</label>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;