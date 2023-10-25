import {useEffect, useState} from 'react';
import { IonSearchbar, IonButton, IonItem } from '@ionic/react';
import { fetchLocation } from '../store/location/slice';
import { useDispatch } from 'react-redux';
import { resetInfo } from '../store/weather/slice';
import { Input } from '../styled/Input';
import { trashBin } from 'ionicons/icons';

const SearchBar:React.FC = (props) => {
  const [searchLocation, setSearchLocation] = useState<string>('');
  const dispatch = useDispatch();
  const { handleGetWeather } = props;

  useEffect(() => {
    dispatch(fetchLocation(searchLocation));
  }, [searchLocation])

  const handleClosingCard = () => {
    console.log('click')
    setSearchLocation(''); 
    const reset = () => dispatch(resetInfo())
    reset();
  }

  return (
      <Input
      value={(searchLocation || '').toUpperCase()}
      onIonInput={e => setSearchLocation(String(e.target.value))}
      placeholder="Buscar ciudad"
      showClearButton="always"
      clearIcon={trashBin}
      onIonCancel={()=> handleClosingCard()}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          handleGetWeather()
        }
      }}
      >
      </Input>
  );
}
export default SearchBar;