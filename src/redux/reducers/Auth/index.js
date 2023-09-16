import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const dummy = createSlice({
  name: "dummy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = dummy?.actions;
export default dummy.reducer;
