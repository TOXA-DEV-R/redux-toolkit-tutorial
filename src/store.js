/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/folder/cart/cartSlice";
import modalSlice from "./features/folder/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});
