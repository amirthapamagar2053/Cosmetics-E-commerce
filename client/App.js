import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Router from "./components/Router";
import { initializeProducts } from "./reducers/productReducer";
import { setUser } from "./reducers/userReducer";

const App = () => {
  const user = JSON.parse(localStorage.getItem("loggedinUser"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProducts());
    dispatch(setUser(user));
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
};

export default App;
