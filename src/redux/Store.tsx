import { configureStore } from "@reduxjs/toolkit";
import readingReducer from "./ReadingSlice";

export const store = configureStore({
  reducer: {
    reading: readingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
