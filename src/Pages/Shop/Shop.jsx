import React from "react";
import "./Shop.css";
import { PRODUCTS } from "../../Products";
import Products from "./Products";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Store</h1>
      </div>
      <div className="products">{PRODUCTS.map((product)=> <Products data={product}/>)}</div>
    </div>
  );
};

export default Shop;
