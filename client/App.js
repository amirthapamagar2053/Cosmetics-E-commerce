import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import Router from "./components/Router";
import { initializeProducts } from "./reducers/productReducer";

const App = () => {
  const dispatch = useDispatch();
  console.log("the app entered");

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
};

export default App;
