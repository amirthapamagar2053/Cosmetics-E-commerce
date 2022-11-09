import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Signup from "./Signup";

const Router = ({ products }) => (
  <Routes>
    <Route path="/" element={<Products products={products} />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
  </Routes>
);

export default Router;
