import axios from "axios";
const baseurl = "http://localhost:3001/api/orderDetails";

const addItemInCart = () => {
  const response = axios.post(baseurl, product);
};

export default addItemInCart;
