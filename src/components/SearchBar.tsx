import {useEffect, useState} from 'react';
import { IonSearchbar, IonButton, IonItem } from '@ionic/react';
import { fetchLocation } from '../store/location/slice';
import { useDispatch } from 'react-redux';
import { resetInfo } from '../store/weather/slice';
import { Input } from '../styled/Input';

const SearchBar:React.FC = (props) => {
  const [searchLocation, setSearchLocation] = useState('');
  const dispatch = useDispatch();
  const { handeler } = props;

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
      value={searchLocation || ''}
      onIonInput={e => setSearchLocation(e.target.value)}
      placeholder="Buscar ciudad"
      color={'dark'}
      showCancelButton="always"
      onIonCancel={()=> handleClosingCard()}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          handeler()
        }
      }}
      >
      </Input>
  );
}
export default SearchBar;