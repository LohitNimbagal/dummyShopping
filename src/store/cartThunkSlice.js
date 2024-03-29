import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import service from '../appwrite/config'

export const fetchCartProducts = createAsyncThunk('fetchCartProducts',
    async () => {
        const response = await service.listItems()
        // console.log(response);
        return response.documents
    }
)

const CartThunkSlice = createSlice({
    name: 'CartThunk',
    initialState: {
        isLoading: false,
        error: false,
        cartProducts: []
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCartProducts.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.cartProducts = action.payload
            })
            .addCase(fetchCartProducts.rejected, (state, action) => {
                console.log('Error', action.payload);
                state.error = true
            })
    }
})

export default CartThunkSlice.reducer