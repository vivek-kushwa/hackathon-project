import { createSlice } from "@reduxjs/toolkit";
import {
  getJobs,
  getUserDetails
} from "redux/actions";

const jobsAndUser = createSlice({
  name: "jobsAndUser",
  initialState: {
   
    
    jobs: [],
    userDetails: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobs?.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getJobs?.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobs = action.payload;
    });
    builder.addCase(getJobs?.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getUserDetails?.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserDetails?.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
    });
    builder.addCase(getUserDetails?.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { setCartItem } = jobsAndUser.actions;
export default jobsAndUser.reducer;
