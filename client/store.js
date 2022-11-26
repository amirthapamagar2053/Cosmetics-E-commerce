import { configureStore } from "@reduxjs/toolkit";
import cartitemReducer from "./reducers/cartitemReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    cartItems: cartitemReducer,
  },
});

export default store;
