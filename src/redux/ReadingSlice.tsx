import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ReadingInitialState, ReadingType } from "../types/Types";

const initialState: ReadingInitialState = {
  readings: [],
};

export const ReadingSlice = createSlice({
  name: "reading",
  initialState,
  reducers: {
    setReadings: (
      state: ReadingInitialState,
      action: PayloadAction<ReadingType[]>
    ) => {
      state.readings = action.payload;
    },
    addReading: (
      state: ReadingInitialState,
      action: PayloadAction<ReadingType>
    ) => {
      state.readings = [...state.readings, action.payload];
    },
    removeReadingById: (
      state: ReadingInitialState,
      action: PayloadAction<string>
    ) => {
      state.readings = state.readings.filter((r) => r.id !== action.payload);
    },
    updateReadingById: (
      state: ReadingInitialState,
      action: PayloadAction<ReadingType>
    ) => {
      state.readings = state.readings.map((r) =>
        r.id !== action.payload.id ? r : action.payload
      );
    },
  },
});

export const { setReadings, addReading, removeReadingById, updateReadingById } =
  ReadingSlice.actions;

export default ReadingSlice.reducer;
