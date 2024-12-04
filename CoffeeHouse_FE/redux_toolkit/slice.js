import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    products: [],
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUser: (state) => {
      state.userInfo = null;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
      console.log(state.loading);
    },
    stopLoading: (state) => {
      state.loading = false;
      console.log(state.loading);
    },
  },
});

export const { setUser, clearUser, setProducts, startLoading, stopLoading } =
  userSlice.actions;
export default userSlice.reducer;
