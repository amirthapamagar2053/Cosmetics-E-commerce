import axios from "axios";
const baseurl = "http://localhost:3001/api/orderDetails";

const addItemInCart = async (productid) => {
  const token = JSON.parse(window.localStorage.getItem("loggedinUser")).token;
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  console.log("The producy id in oiderDEtaukservixe", productid);
  const response = await axios.post(`${baseurl}`, { productid }, config);
  return response.data;
};

const getItemInCart = async () => {
  const token = JSON.parse(window.localStorage.getItem("loggedinUser")).token;
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.get(`${baseurl}`, config);
  return response.data;
};

export default { addItemInCart, getItemInCart };
