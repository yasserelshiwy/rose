import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

export const cashOrder = createAsyncThunk(
  "cashOrder/pay",
  async function (values, { getState, rejectWithValue }) {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/orders",
        method: "Post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          shippingAddress: values,
        },
      });

      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed to decrease Quantity Try again.");
    }
  }
);
export const payOnline = createAsyncThunk(
  "payOnline/pay",
  async function (values, { getState, rejectWithValue }) {
    try {
      const token = getState().userReducer.token;
      if (!token) {
        return rejectWithValue("There is an error, please log in first.");
      }
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/orders/checkout?url=http://localhost:3000",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          shippingAddress: values,
        },
      });
      if (data.message === "success" && data.session) {
        return {
          url: data.session.url,
          sessionId: data.session.id,
        };
      } else {
        return rejectWithValue("Failed to process payment, try again.");
      }
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed to process operation, please try again.");
    }
  }
);
export const getOrders = createAsyncThunk(
  "getOrders/pay",
  async function (_, { getState, rejectWithValue }) {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");
      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/orders",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.log("Request error:", error);
    }
  }
);
export const payAndOrder = createSlice({
  name: "pay",
  initialState: {
    data: null,
    orderData: null,
    cashData: null,
    onlineData: null,
    loading: false,
    error: null,
  },
  extraReducers: function (builder) {
    builder.addCase(cashOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(cashOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.cashData = action.payload;
      toast.success("The operation was successful.");
    });
    builder.addCase(cashOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error("Payment failed. Please try again.");
    });
    builder.addCase(payOnline.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(payOnline.fulfilled, (state, action) => {
      state.loading = false;
      const { url } = action.payload;
      if (url) {
        window.location.href = url;
      }
      state.onlineData = action.payload;
      toast.success("The operation was successful.");
    });
    builder.addCase(payOnline.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error("Payment failed. Please try again.");
    });
    builder.addCase(getOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orderData = action.payload.orders;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const payAndOrderReducer = payAndOrder.reducer;
export const payAndOrderAction = payAndOrder.actions;
