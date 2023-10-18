import {useEffect, useState} from 'react';
import { IonSearchbar, IonButton, IonItem } from '@ionic/react';
import { fetchLocation } from '../store/location/slice';
import { useDispatch } from 'react-redux';
import { resetInfo } from '../store/weather/slice';
import { addUserTrace } from '../store/traces/slice';

const SearchBar:React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const dispatch = useDispatch();

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
    <IonItem color='light' style={{ display: 'flex', flexDirection: 'column'}}>
      <IonSearchbar
      value={searchLocation || ''}
      onIonInput={e => setSearchLocation(e.target.value)}
      placeholder="Buscar ciudad"
      color={'dark'}
      showCancelButton="always"
      onIonCancel={()=> handleClosingCard()}
      >
      </IonSearchbar>
    </IonItem>
  );
}
export default SearchBar;