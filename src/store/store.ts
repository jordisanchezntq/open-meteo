import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/slice";
import locationReducer from "./location/slice"
import traceReducer from "./traces/slice"
import { productApi } from './apis/productApi.js'

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        location: locationReducer,
        tracing: traceReducer,

        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( productApi.middleware )
})

export default store;