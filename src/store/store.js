import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/slice";
import locationReducer from "./location/slice"

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        location: locationReducer
    }
})

export default store;