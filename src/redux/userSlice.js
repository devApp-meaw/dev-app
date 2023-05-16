import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
  },
  reducers: {
    changeUser(state) {
      return { ...state, isLogged: true };
    },
    logout(state) {
      return { ...state, isLogged: false };
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
