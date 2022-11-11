import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import Products from "./Products";
import Signup from "./Signup";

const Router = () => (
  <Routes>
    <Route path="/" element={<Products />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Cart" element={<Cart />} />
  </Routes>
);

export default Router;
