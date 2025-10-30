import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map((item) => (
        <div key={item.id} style={{borderBottom:"1px solid #ddd", padding:"10px"}}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Qty: {item.qty}</p>
          
          <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
          <button onClick={() => dispatch(decrementQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
