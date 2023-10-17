import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/slice";
import locationReducer from "./location/slice"
import traceReducer from "./traces/slice"
import productsReducer from "./products/slice"

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        location: locationReducer,
        tracing: traceReducer,
        products: productsReducer
    }
})

export default store;