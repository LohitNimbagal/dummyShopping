import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
import authReducer from "./authSlice"
import currencyReducer from "./currencySlice"
import cartThunkReducer from "./cartThunkSlice";

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        auth: authReducer,
        currency: currencyReducer,
        cartThunk: cartThunkReducer
    },
})
