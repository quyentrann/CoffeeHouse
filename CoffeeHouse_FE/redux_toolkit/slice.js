import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    products: [] 
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
    }
  },
});

export const { setUser, clearUser, setProducts } = userSlice.actions;
export default userSlice.reducer;
