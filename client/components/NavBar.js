import toskaLogo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="wrapper">
    <div className="flex split-pair align-center region-tn">
      <img src={toskaLogo} alt="toska" className="logo" />
      <input type="text" placeholder="Search.." />

      <div className="flex gap-2">
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="/Login" className="text-link">
          Login
        </Link>
        <Link to="/Signup" className="text-link">
          Signup
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
