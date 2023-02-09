import userReducer from "../redux/userReducer/userReducer";
import statusReducer from "./statusReducer/statusReducer";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    userReducer,
    statusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispathType = typeof store.dispatch;
