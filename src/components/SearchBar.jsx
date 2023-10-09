import {useEffect, useState} from 'react';
import { IonSearchbar } from '@ionic/react';
import { setLocationAction } from '../store/location/slice';
import { useDispatch } from 'react-redux';

function Example() {
  const [searchLocation, setSearchLocation] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
    console.log(searchLocation)
    dispatch(setLocationAction(searchLocation))
  }, [searchLocation])

  return (
    <div>
      <IonSearchbar
      value={searchLocation}
      onIonInput={e => setSearchLocation(e.target.value)}
      placeholder="Buscar ciudad"
      color={'dark'}
      animated={true}
      >
      </IonSearchbar>
    </div>
  );
}
export default Example;