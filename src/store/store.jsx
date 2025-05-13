import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/user/user.slice.jsx";
import { cartReducer } from "./features/cart/cart.slice.jsx";
import { payAndOrderReducer } from "./features/payAndOrder/payAndOrder.slice.jsx";

export const ourStore = configureStore({
  reducer: {
    userReducer,
    cartReducer,
    payAndOrderReducer,
  },
});
