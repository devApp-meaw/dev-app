import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    data: {},
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, data: payload };
    },
    logout(state, { payload }) {
      return { ...state, isLogged: false, data: payload };
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
