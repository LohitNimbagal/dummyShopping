import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice"
import currencyReducer from "./currencySlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        currency: currencyReducer,
    },
})
