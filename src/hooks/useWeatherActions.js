import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherInfo } from '../store/weather/slice';

export const useWeatherActions = () => {
    const dispatch = useDispatch();
    const location = useSelector( state => state.location.city)

    const handleGetWeather = () => {
        if(location.results) {
          const locaInput = location.results[0];
          const infoFetch = () => dispatch( fetchWeatherInfo(locaInput));
          infoFetch();
        } else {
          const infoFetch = () => dispatch( fetchWeatherInfo(null));
          infoFetch();
        }
      }

      return { handleGetWeather };
}

export default useWeatherActions;