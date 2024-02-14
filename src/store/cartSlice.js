import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(pro => pro.item.id !== action.payload.id)
        },
        updateQty: (state, action) => {
            return state.map((pro) => {
                if (pro.item.id === action.payload.id) {
                    return {...pro, quantity: action.payload.quantity}; // Spread pro instead of item
                } else {
                    return pro; // Return pro as is
                }
            });
        }
}})

export const {addToCart, removeFromCart, updateQty} = cartSlice.actions
export default cartSlice.reducer