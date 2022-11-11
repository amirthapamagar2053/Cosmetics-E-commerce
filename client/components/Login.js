import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loggedinUser } from "../reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    let saveduser = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(loggedinUser(saveduser));
    navigate("/");
  };
  return (
    <div>
      <h3>Please login to your account</h3>
      <form onSubmit={handleLogin}>
        <input type="text" name="email" placeholder="Enter email" />
        <input type="text" name="password" placeholder="Enter password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
