import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "components";
import { getApi, postApi } from "lib";

export const signUp = createAsyncThunk("sign-up", async (payload, thunkAPI) => {
  try {
    let res = await postApi("/signup", payload);
    return res?.data?.data;
  } catch (error) {
    message.error(
      error?.response?.data?.message || "Failed to fetch skills list!"
    );
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// export * from "./Auth";
