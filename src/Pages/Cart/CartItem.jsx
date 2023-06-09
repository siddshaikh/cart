import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CartItem = (props) => {
  const {id ,name , price , productImage} = props.data
  const {cartItem,addToCart,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItem'>
      <img src={productImage} alt={name} />
      <div className="description">
        <p><b>{name}</b></p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input value={cartItem[id]} readOnly/>
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem