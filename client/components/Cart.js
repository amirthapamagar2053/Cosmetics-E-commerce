import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const user = useSelector((state) => state.users);
  console.log("the shipping address is ", user);

  return (
    <div>
      {cartItems.map((item, index) => (
        <div key={index}>{item.id}</div>
      ))}
      {user.shippingAddress ? (
        <div>show shippingaddress</div>
      ) : (
        <button>Add shipping Address</button>
      )}
    </div>
  );
};

export default Cart;
