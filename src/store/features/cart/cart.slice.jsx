import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";
// ! add product fn()========>
export const addCartProduct = createAsyncThunk(
  "cart/addCartProduct",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");

      const { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/cart",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          product: id,
          quantity: 1,
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        return rejectWithValue("There is an error, please log in first.");
      }
      return rejectWithValue("An unexpected error occurred. Try again.");
    }
  }
);
// ! get cart data fn()========>
export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");

      let { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed to load cart. Try again.");
    }
  }
);
// ! get all delete product fn()========>
export const deleteCartProducts = createAsyncThunk(
  "cart/deleteCartProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");
      let { data } = await axios.request({
        url: "https://flower.elevateegy.com/api/v1/cart",
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed to delete all product Try again.");
    }
  }
);
// ! get delete Specific product fn()========>
export const deleteSpecificCartProducts = createAsyncThunk(
  "cart/deleteSpecificCartProducts",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");

      let { data } = await axios.request({
        url: `https://flower.elevateegy.com/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed to delete product. Try again.");
    }
  }
);
// ! get increase Quantity fn()========>
export const increaseQuantityCartProducts = createAsyncThunk(
  "cart/increaseQuantityCartProducts",
  async ({ quant, id }, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");

      let { data } = await axios.request({
        url: `https://flower.elevateegy.com/api/v1/cart/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          quantity: (quant += 1),
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed to increase Quantity. Try again.");
    }
  }
);
// ! get decrease Quantity fn()========>
export const decreaseQuantityCartProducts = createAsyncThunk(
  "cart/decreaseQuantityCartProducts",
  async ({ quant, id }, { getState, rejectWithValue }) => {
    try {
      const token = getState().userReducer.token;
      if (!token)
        return rejectWithValue("There is an error, please log in first.");
      if (quant <= 1) {
        return rejectWithValue("Quantity is already one.");
      }

      let { data } = await axios.request({
        url: `https://flower.elevateegy.com/api/v1/cart/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          quantity: quant - 1,
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed to decrease Quantity Try again.");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Quant: 0,
    data: null,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(addCartProduct.fulfilled, (state, action) => {
      state.data = action.payload.cart;
      state.Quant = action.payload.numOfCartItems;
      toast.success(
        "The product has been successfully added to the shopping cart."
      );
    });
    builder.addCase(addCartProduct.rejected, (_, action) => {
      toast.error(action.payload);
    });
    builder.addCase(fetchCartProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.cart;
      state.Quant = action.payload.numOfCartItems;

    });
    builder.addCase(fetchCartProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteCartProducts.fulfilled, (state, action) => {
      state.data = "";
      state.Quant = 0;
      toast.success("All products have been successfully removed.");
    });
    builder.addCase(deleteCartProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(deleteSpecificCartProducts.fulfilled, (state, action) => {
      state.data = action.payload.cart;
      state.Quant = action.payload.numOfCartItems;
      toast.success("The product has been successfully deleted.");
    });
    builder.addCase(deleteSpecificCartProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(increaseQuantityCartProducts.fulfilled, (state, action) => {
      state.data = action.payload.cart;
      state.Quant = action.payload.numOfCartItems;
      toast.success("increaseQuantityCartProducts");
    });
    builder.addCase(increaseQuantityCartProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(decreaseQuantityCartProducts.fulfilled, (state, action) => {
      state.data = action.payload.cart;
      state.Quant = action.payload.numOfCartItems;
      toast.success("decreaseQuantityCartProducts");
    });
    builder.addCase(decreaseQuantityCartProducts.rejected, (state, action) => {
      state.error = action.payload;
      toast.error(action.payload);
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
