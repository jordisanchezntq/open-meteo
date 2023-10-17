import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userTracing: [],
    loading: false,
    error: null
}

export const traceSlice = createSlice({
    name: 'tracing',
    initialState,
    reducers: {
        addUserTrace: (state, action) => {
            state.userTracing = {
                ...state.userTracing,
                ...action.payload
            }
        }
    }
});



export default traceSlice.reducer;

export const { addUserTrace } = traceSlice.actions;