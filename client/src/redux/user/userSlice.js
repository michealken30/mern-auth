import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInstart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailuire: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInstart, signInSuccess, signInFailuire } = userSlice.actions;

export default userSlice.reducer;
