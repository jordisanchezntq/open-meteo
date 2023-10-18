import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    temperature: null,
    loading: false,
    error: false
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        resetInfo: (state, action) => {
            state.temperature = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeatherInfo.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchWeatherInfo.fulfilled, (state, action) => {
            state.temperature = action.payload;
            state.loading = false;
        })
        .addCase(fetchWeatherInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })
    }
})


export const fetchWeatherInfo = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
        // Destructuring info
        const { latitude, longitude } = city;

        const res = await fetch(`${import.meta.env.VITE_API_METEO}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain&timezone=GMT`, {
            method: 'GET'
        });
        const data = await res.json();
        return data;
    }
)

export default weatherSlice.reducer;

export const { resetInfo, setError } = weatherSlice.actions;