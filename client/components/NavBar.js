import toskaLogo from "../assets/images/logo.jpg";
import cart from "../assets/images/cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/userReducer";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  return (
    <div className="wrapper">
      <div className="flex split-pair align-center region-tn">
        <img src={toskaLogo} alt="toska" className="logo" />
        <input type="text" placeholder="Search.." />

        <div className="flex gap-2">
          <Link to="/" className="text-link">
            Home
          </Link>

          <Link to="/cart" className="text-link">
            <img src={cart} alt="toska" className="logo" />
          </Link>

          {user ? (
            <em>{user.firstname} logged in</em>
          ) : (
            <Link to="/Login" className="text-link">
              Login
            </Link>
          )}

          {user ? (
            <Link
              to="/"
              className="text-link"
              onClick={() => {
                localStorage.setItem("loggedinUser", JSON.stringify([]));
                dispatch(setUser(null));
              }}
            >
              Logout
            </Link>
          ) : (
            <Link to="/Signup" className="text-link">
              Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
