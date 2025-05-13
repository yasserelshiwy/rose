import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export const signUp = createAsyncThunk(
  "signUp/user",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/auth/signup",
        method: "POST",
        data: values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data.error || "Signup failed");
    }
  }
);

export const forgetPass = createAsyncThunk(
  "forgetPass/user",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/auth/forgotPassword",
        method: "POST",
        data: values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data.error || "Send Email Failed");
    }
  }
);
export const verifyCode = createAsyncThunk(
  "verifyCode/user",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/auth/verifyResetCode",
        method: "POST",
        data: values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data.error || "invalid code ");
    }
  }
);
export const getProfileData = createAsyncThunk(
  "getProfileData/user",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/auth/profile-data",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.error || "invalid getProfileData "
      );
    }
  }
);
export const changePassword = createAsyncThunk(
  "changePassword/user",
  async (values, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/auth/change-password",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.error || "invalid changePassword "
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    data: null,
    profileData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      signOut({ callbackUrl: window.location.href });
      state.token = null;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(signUp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(forgetPass.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(forgetPass.fulfilled, (state, action) => {
      state.data = action.payload.info;
      toast.success(action.payload.info);
      state.error = null;
      state.loading = false;
    });
    builder.addCase(forgetPass.rejected, (state, action) => {
      state.error = action.payload;
      toast.error(action.payload);
    });
    builder.addCase(verifyCode.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(verifyCode.fulfilled, (state, action) => {
      state.data = action.payload.info;
      toast.success(action.payload.info);
      state.error = null;
      state.loading = false;
    });
    builder.addCase(verifyCode.rejected, (state, action) => {
      state.error = action.payload;
      toast.error(action.payload);
    });
    builder.addCase(getProfileData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProfileData.fulfilled, (state, action) => {
      state.profileData = action.payload.user;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getProfileData.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(changePassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.token = action.payload.token;
      toast.success("Your password has been changed successfully. You must log in again.");
      state.error = null;
      state.loading = false;
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("There is a problem, try again.");
    });
  },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
