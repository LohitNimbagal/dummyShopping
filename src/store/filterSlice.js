import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: [],
    reducers: {
        priceFilter: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const {priceFilter} = filterSlice.actions
export default filterSlice.reducer