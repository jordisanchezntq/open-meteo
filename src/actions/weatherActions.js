import {
    GET_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR
} from '../types'

// Get the weather
export function getWeatherAction() {
    return async (dispatch) => {
        dispatch( getWeather());

        try {
            const result = await fetch(`${import.meta.env.VITE_API_URL}`);
            const weather = await result.json();
            console.log(weather)
            dispatch( getWeatherSuccess(weather) );
        } catch (error) {
            console.log(error)
            dispatch( getWeatherError(true) );
        }
    }
}

const getWeather = () => ({
    type: GET_WEATHER,
    payload: true
})

const getWeatherSuccess = (weather) => ({
    type: GET_WEATHER_SUCCESS,
    payload: weather
})

const getWeatherError = (error) => ({
    type: GET_WEATHER_ERROR,
    payload: error
})