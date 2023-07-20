import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "animalRegistration",
  initialState: {
    species: "",
    temperament: "",
  },
  reducers: {
    setSpecies(state, { payload }) {
      return { ...state, species: payload };
    },
    setTemperament(state, { payload }) {
      return { ...state, temperament: payload };
    },
  },
});

export const { setSpecies, setTemperament } = slice.actions;

export const selectAnimalRegistration = (state) => state.animalRegistration;

export default slice.reducer;
