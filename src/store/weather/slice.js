import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    temperature: null,
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

export const fetchWeatherInfo = () => async (dispatch) => {
    dispatch(getInfo());

    try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&hourly=temperature_2m,rain&timezone=GMT');
        const data = await res.json();
        dispatch(getInfoSuccess(data));
    } catch (error) {
        console.log(error);
        dispatch(getInfoError())
    }
}

export default weatherSlice.reducer;

export const { getInfo, getInfoSuccess, getInfoError } = weatherSlice.actions;