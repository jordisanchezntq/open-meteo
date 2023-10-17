import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
    }
})

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products', {
            method: 'GET'
        });
        const data = res.json();
        return data;
    }
)

export default productsSlice.reducer;

export const {} = productsSlice.actions;