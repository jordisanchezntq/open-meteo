import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    city: null,
    loading: false,
    error: null
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchLocation.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchLocation.fulfilled, (state, action) => {
            state.city = action.payload;
        })
    }
})

export const fetchLocation = createAsyncThunk(
    'location/fetchLocation',
    async (city) => {
        const res = await fetch(`${import.meta.env.VITE_API_GEOCODING}search?name=${city}&count=1&language=en&format=json`, {
            method: 'GET'
        });
        const locData = await res.json();
        return locData;
    }
)


export default locationSlice.reducer;

export const { } = locationSlice.actions;