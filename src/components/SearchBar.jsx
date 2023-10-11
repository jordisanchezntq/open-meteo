import {useEffect, useState} from 'react';
import { IonSearchbar, IonButton, IonItem } from '@ionic/react';
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
    <IonItem style={{ display: 'flex'}}>
      <IonSearchbar
      value={searchLocation}
      onIonInput={e => setSearchLocation(e.target.value)}
      placeholder="Buscar ciudad"
      color={'dark'}
      animated={true}
      onClo
      >
      </IonSearchbar>
      <IonButton
      color={'danger'}
      onClick={() => setSearchLocation('')}>Borrar input</IonButton>
    </IonItem>
  );
}
export default Example;