import { createSlice } from "@reduxjs/toolkit";

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

export const addToCart =()=>{
    return async(dispatch)=>{
        console.log('The additem to cart dispatch entered')
        let addedItem=
    }
}
