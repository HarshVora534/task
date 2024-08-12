import React, { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });

  return (
    <div>
      <h2 className="Cart">Cart</h2>
      <ul className="cartDetails">
        {cart.map((item, index) => (
          <li className="cartList" key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <h4 className="dash">--------------------------------------------------------------------------</h4>
      <h3 className="total">Total: ${total}</h3>
    </div>
  );
}

export default Cart;
