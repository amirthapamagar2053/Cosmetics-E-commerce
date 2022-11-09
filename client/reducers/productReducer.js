import productServices from "../services/productServices";

const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return [...action.payload];
    },
  },
});

export const { setProducts } = productSlice.actions;

export const initializeProducts = () => {
  return async (dispatch) => {
    const prodcuts = await productServices.getAllProducts();
    console.log("the dispatch entered", prodcuts);
    dispatch(setProducts(prodcuts));
  };
};

export default productSlice.reducer;
