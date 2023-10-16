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
            return {
                ...state,
                loading: true
            }
        },
        addUserTraceSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                userTracing: {
                    ...state.userTracing,
                    ...action.payload
                },
                error: null
            }
        },
        addUserTraceError: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
    }
})
export const setTracingsAction = (trace) => async (dispatch) => {
    dispatch(addUserTrace());
    console.log(trace)

    try {
        dispatch(addUserTraceSuccess(trace));   
    } catch (error) {
        console.log(error);
        dispatch(addUserTraceError());
    }
}

export default traceSlice.reducer;

export const { addUserTrace, addUserTraceSuccess, addUserTraceError,} = traceSlice.actions;