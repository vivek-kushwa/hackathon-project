import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "components";
import { deleteApi, getApi, patchApi, postApi, postFileApi } from "lib";

import { API_ERROR } from "utils/constant";

export const getJobs = createAsyncThunk(
  "jobsAndUser/getJobs",
  async (payload, thunkAPI) => {
    try {
      const response = await getApi("");
      if (response?.data?.success) {
        if (!response?.data?.data?.cart_items?.length) {
          console.log(response?.data?.data?.cart_items, "sahiovso");
          payload?.next();
        }
        return response?.data?.data?.cart_items;
      }
    } catch (error) {
      message.error(error?.response?.data?.message || API_ERROR);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const postJobSave = createAsyncThunk(
  "jobsAndUser/postJobSave",
  async ({ body, next }, thunkAPI) => {
    try {
      const response = await postApi("", body);
      if (response?.data?.success) {
        next();
        message.success(response?.data?.message);
      }
    } catch (error) {
      message.error(error?.response?.data?.message || API_ERROR);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const postJobApply = createAsyncThunk(
  "jobsAndUser/postJobApply",
  async ({ body, next }, thunkAPI) => {
    try {
      const response = await postFileApi("", body);
      if (response?.data?.success) {
        next(response?.data?.data);
        message.success(response?.data?.message);
        return response?.data?.data?.id;
      }
    } catch (error) {
      message.error(error?.response?.data?.message || API_ERROR);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const patchOrder = createAsyncThunk(
  "jobsAndUser/patchOrder",
  async ({ body, next }, thunkAPI) => {
    try {
      const response = await patchApi("", body);
      if (response?.data?.success) {
        next();
        message.success(response?.data?.message);
      }
    } catch (error) {
      message.error(error?.response?.data?.message || API_ERROR);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "jobsAndUser/getUserDetails",
  async (payload = "", thunkAPI) => {
    try {
      const response = await getApi("" + "?sort_by=scheduled");
      if (response?.data?.success) {
        return response?.data?.data;
      }
    } catch (error) {
      message.error(error?.response?.data?.message || API_ERROR);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
