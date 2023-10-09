import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: null,
    loading: false,
    error: null
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            return {
             ...state,
             loading: true
            }
         },
         setLocationSuccess: (state, action) => {
             return {
                 ...state,
                 loading: false,
                 city: action.payload,
                 error: null
             }
         },
         setLocationError: (state, action) => {
             return {
                 loading: false,
                 error: action.payload
             }
         }
    }
})

export const setLocationAction = (city) => async (dispatch) => {
    dispatch(setLocation())

    try {
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
        const locData = await res.json();
        dispatch(setLocationSuccess(locData))
    } catch (error) {
        console.log(error);
        dispatch(setLocationError())
    }
}

export default locationSlice.reducer;

export const { setLocation, setLocationSuccess, setLocationError} = locationSlice.actions;