import { createSlice } from "@reduxjs/toolkit";
import oderDetailServices from "../services/oderDetailServices";

const cartSlice = createSlice({
  name: "carts",
  initialState: null,
  reducers: {
    setCarts(state, action) {
      return action.payload;
    },
    addItemToCart(state, action) {
      return action.payload;
    },
  },
});

export const addToCart = (productid) => {
  return async (dispatch) => {
    console.log("The additem to cart dispatch entered");
    let addedItem = oderDetailServices.addItemInCart(productid);
    console.log("the added item is", addedItem);
    dispatch(addItemToCart(addedItem));
  };
};

export const { setCarts, addItemToCart } = cartSlice.actions;
