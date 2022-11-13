import axios from "axios";
const baseurl = "http://localhost:3001/api/orderDetails";

const addItemInCart = async (productid) => {
  console.log("the secvice add to cartr entered");
  const response = await axios.post(`${baseurl}`, productid);
  return response.data;
};

export default { addItemInCart };
