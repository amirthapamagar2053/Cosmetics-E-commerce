import { createSlice } from "@reduxjs/toolkit";
import loginServices from "../services/loginServices";

const userSlice = createSlice({
  name: "users",
  initialState: null,
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      return user;
    },
  },
});

export const loggedinUser = (saveduser) => {
  return async (dispatch) => {
    console.log("the dispatch entered");
    const loggedUser = await loginServices.login(saveduser);
    localStorage.setItem("loggedinUser", JSON.stringify(loggedUser));
    console.log("the logged user is", loggedUser);
    dispatch(setUser(loggedUser));
  };
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
