import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { PRODUCTS } from '../../Products'
import CartItem from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {cartItem,getTotalCartAmount} = useContext(ShopContext)
  const cartAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
     <div>
      <h3>Your Cart Items</h3>
     </div>
     <div className="cartItems">
      {
        PRODUCTS.map((product)=>{   
          if(cartItem[product.id] !==0){
            return <CartItem data={product}/>
          }
        })
      }
     </div>
     { cartAmount > 0 ? 
     <div className='checkout'>
      <p>Subtotal: {cartAmount} $</p>
      <button onClick={()=>navigate('/')}>Continue Shopping</button>
      <button>Checkout</button>
     </div> : <h2> You're Cart is Empty</h2>}
    </div>
  )
}

export default Cart