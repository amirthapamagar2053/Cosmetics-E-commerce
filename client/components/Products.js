import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cartitemReducer";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // if (!products) {
  //   console.log("the if emtered is ", products);

  //   return null;
  // } else {
  console.log("the else emtered is ", products);
  const addtoCart = (productid) => {
    console.log("the hadnele adddto cart entered");
    dispatch(addToCart(productid));
  };
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            {product.name}
            <button onClick={() => addtoCart(product.id)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
  // }
};
export default Products;
