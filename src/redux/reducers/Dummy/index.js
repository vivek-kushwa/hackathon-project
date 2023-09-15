import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const dummy = createSlice({
  name: "dummy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = dummy?.actions;
export default dummy.reducer;
