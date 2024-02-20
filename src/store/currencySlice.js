import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        countryCode: 'inr',
        countryRate: 83,
    },
    reducers: {
        setCurrency: (state, action) => {
            state.countryCode = action.payload.code,
            state.countryRate = action.payload.rate
        }
    }
})

export const {setCurrency} = currencySlice.actions
export default currencySlice.reducer