import { createSlice } from '@reduxjs/toolkit'
import { setLocationAction } from '../location/slice'

const initialState = {
    temperature: null,
    location: null,
    loading: false,
    error: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getInfo: (state, action) => {
           return {
            ...state,
            loading: true
           }
        },
        getInfoSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                temperature: action.payload,
                error: null
            }
        },
        getInfoError: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        }
    },
})

export const fetchWeatherInfo = (city) => async (dispatch) => {
    dispatch(getInfo());

    // Destructuring info
    const { latitude, longitude } = city;

    try {

        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain&timezone=GMT`);
        const data = await res.json();
        dispatch(getInfoSuccess(data));
    } catch (error) {
        console.log(error);
        dispatch(getInfoError())
    }
}

export default weatherSlice.reducer;

export const { getInfo, getInfoSuccess, getInfoError } = weatherSlice.actions;