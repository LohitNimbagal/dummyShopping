import service from '../appwrite/config'
import { toast } from 'react-toastify'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCartProducts = createAsyncThunk('fetchCartProducts',
    async () => {
        const response = await service.listItems()
        return response.documents
    }
)

export const addToCart = createAsyncThunk('addToCart',
    async (product) => {
        // console.log(product);
        const response = await service.createItem(product)
        return response
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
                toast.success(`Added ${action.payload.title} to 🛒`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                });
            })

            .addCase(removeFromCart.fulfilled, (state, action) => {
                const updatedState = state.filter(item => item.id !== action.payload.id);
                toast.success(`Removed ${action.payload.title} from 🛒`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                });
                return updatedState;
            })

            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                return action.payload
            })
    }
})

export default CartThunkSlice.reducer