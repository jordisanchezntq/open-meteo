import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
})

export default productsSlice.reducer;

export const {} = productsSlice.actions;