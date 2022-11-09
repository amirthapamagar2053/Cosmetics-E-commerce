import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

const signupUser = async (newUser) => {
  console.log("the axios post entered");
  const response = await axios.post(baseUrl, newUser);
  return response.data;
};

export default { signupUser };
