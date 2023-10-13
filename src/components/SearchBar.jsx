import {useEffect, useState} from 'react';
import { IonSearchbar, IonButton, IonItem } from '@ionic/react';
import { setLocationAction } from '../store/location/slice';
import { useDispatch } from 'react-redux';
import Button from '../styled/Button';
import { resetInfo } from '../store/weather/slice';

function Example() {
  const [searchLocation, setSearchLocation] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setLocationAction(searchLocation))
  }, [searchLocation])

  return (
    <IonItem style={{ display: 'flex', flexDirection: 'column'}}>
      <IonSearchbar
      value={searchLocation || ''}
      onIonInput={e => setSearchLocation(e.target.value)}
      placeholder="Buscar ciudad"
      color={'dark'}
      animated={true}
      showCancelButton="always"
      onIonCancel={() => {
        setSearchLocation(''); 
        dispatch(resetInfo(searchLocation))
      }}
      >
      </IonSearchbar>
    </IonItem>
  );
}
export default Example;