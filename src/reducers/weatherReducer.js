import {
    GET_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR
} from '../types'

const initialState = {
    temperatures: [],
    rain: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_WEATHER:
            return {
                ...state,
                loading: action.payload,
            }
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                temperatures: [...state.temperatures, action.payload]
            }
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}