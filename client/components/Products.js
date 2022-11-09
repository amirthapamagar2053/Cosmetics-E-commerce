import React from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      {products.map((product, index) => {
        return <div key={index}>{product.image}</div>;
      })}
    </div>
  );
};
export default Products;
