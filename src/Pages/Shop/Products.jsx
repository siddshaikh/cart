import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const Products = (props) => {
  const { id, name, price, productImage } = props.data;
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
  return (
    <div className="product">
      <img src={productImage} alt={name} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Products;
