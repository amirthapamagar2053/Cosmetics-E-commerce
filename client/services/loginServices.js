import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

const login = async (saveduser) => {
  console.log("the axios login enterede");
  const response = await axios.post(baseUrl, saveduser);
  console.log("the response from the axios", response.data);
  return response.data;
};

export default { login };
