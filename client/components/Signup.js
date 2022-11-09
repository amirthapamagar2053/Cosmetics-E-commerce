import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userServcices from "../services/userServcices";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let newUser = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
      email: event.target.email.value,
    };
    await userServcices.signupUser(newUser);
    navigate("/Login");
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstname" placeholder="Enter firstname" />
          <input type="text" name="lastname" placeholder="Enter lastname" />
          <input type="text" name="password" placeholder="Enter password" />
          <input type="text" name="email" placeholder="Enter email" />
          <button type="submit">Submit</button>
        </form>
        <h4>
          Already Registered /{" "}
          <Link to="/Login" className="text-link">
            Login
          </Link>{" "}
        </h4>{" "}
      </div>
    </div>
  );
};

export default Signup;
