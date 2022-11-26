import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import Router from "./components/Router";
import { initializeProducts } from "./reducers/productReducer";
import { setUser } from "./reducers/userReducer";

const App = () => {
  const user = JSON.parse(localStorage.getItem("loggedinUser"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProducts());
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
};

export default App;
