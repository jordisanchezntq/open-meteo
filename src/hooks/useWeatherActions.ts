import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherInfo } from '../store/weather/slice';
import { addUserTrace } from "../store/traces/slice";

export const useWeatherActions = () => {
    const dispatch = useDispatch();
    const location = useSelector( (state: any) => state.location.city)

    const handleGetWeather = (): any => {
        if(location.results) {
          const locaInput = location.results[0];
          const infoFetch = () => dispatch( fetchWeatherInfo(locaInput));
          infoFetch();
        } else {
          const infoFetch = () => dispatch( fetchWeatherInfo(null));
          infoFetch();
        }

        // Adding tracing
        const addTrace = () => dispatch(addUserTrace({
          locationSearched: location,
          lastInteraction: new Date().toISOString()
        }))
        addTrace();
      }

      return { handleGetWeather };
}

export default useWeatherActions;