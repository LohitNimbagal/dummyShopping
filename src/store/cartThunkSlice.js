import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import service from '../appwrite/config'

export const fetchCartProducts = createAsyncThunk('fetchCartProducts',
    async () => {
        const response = await service.listItems()
        return response.documents
    }
)

export const addToCart = createAsyncThunk('addToCart',
    async (product) => {
        const { id, title, price } = product
        const response = await service.createItem({ id, title, price })
        return product
    }
)
export const removeFromCart = createAsyncThunk('removeFromCart',
    async (product) => {
        const response = await service.deleteItem(product.$id)
        return product
    }
)

const CartThunkSlice = createSlice({
    name: 'CartThunk',
    initialState: [],
    extraReducers: builder => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                state.push(action.payload)
            })

            .addCase(removeFromCart.fulfilled, (state, action) => {
                return state.filter(item => item.id !== action.payload.id)
            })

            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state = action.payload
            })
    }
})

export default CartThunkSlice.reducer