import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
