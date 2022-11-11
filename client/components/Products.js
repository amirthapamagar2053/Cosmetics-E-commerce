import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);
  // if (!products) {
  //   console.log("the if emtered is ", products);

  //   return null;
  // } else {
  console.log("the else emtered is ", products);
  const addtoCart = () => {};
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            {product.name}
            <button onClick={addtoCart()}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
  // }
};
export default Products;
