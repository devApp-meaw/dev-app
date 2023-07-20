import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import animalRegistrationReducer from "./animalRegistrationSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: userReducer,
    animalRegistration: animalRegistrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
