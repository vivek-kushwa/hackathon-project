import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "components";
import { getApi } from "lib";

export const getDummyAPI = createAsyncThunk(
  "getDummyAPI",
  async (payload, thunkAPI) => {
    try {
      let res = await getApi("");
      return res?.data?.data;
    } catch (error) {
      message.error(
        error?.response?.data?.message || "Failed to fetch skills list!"
      );
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export * from "./User"
