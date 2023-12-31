import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
  IonTextarea,
  IonToggle,
  IonToolbar,
  IonTitle,
  IonPage,
  IonText,
  IonNavLink,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import Header from '../components/Header';

// Capacitor
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';


const Profile: React.FC = () => {
  const [ deviceInfo, setDeviceInfo ] = useState(null);
  const [ coordinates, setCoordinates ] = useState(null);
  
  useEffect(() => {
    // CapacitOr get Devide info
    const getDevideInfo = async () => {
      try {
        const info = await Device.getInfo();
        setDeviceInfo(info)
      } catch (error) {
        console.log(error)
      }
    }
    getDevideInfo();
  },[])

    useEffect(() => {
      try {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
      } catch (error) {
        console.log(error)
      }
    }, [])

  return (
    <IonPage>
      <Header />
        <IonContent fullscreen={true}>
          <IonItem>
            <IonText style={{ padding: '10px 0px'}}>
              En esta tab se simula el dashboard de info personal, y acciones de cambiar email y la password.
            </IonText>
          </IonItem>
          <IonList inset={true}>
            <IonItem>
              <IonInput label="Email"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Password"></IonInput>
            </IonItem>
            <IonItem>
              <IonToggle labelPlacement="end">
                <IonLabel>I read all the conditions</IonLabel>
              </IonToggle>
            </IonItem>
          </IonList>

          <IonList inset={true} className='ion-padding ion-text-center'>
            <IonNavLink routerDirection='forward' component={''}>
              <IonLabel color='primary'>
                Olvidaste tu contraseña
              </IonLabel>
            </IonNavLink>
          </IonList>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Device Info</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
             { deviceInfo &&
              Object.entries(deviceInfo).map(([key, value], i) => (
                <>
                  <IonText key={i}>
                    {key}: {value}
                  </IonText>
                  <br />
                </>
              ))
             }
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Geolocalización</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
             <IonText className='ion-padding-end'>
              {coordinates && coordinates.coords.latitude}
             </IonText>

            </IonCardContent>
          </IonCard>

        </IonContent>
    </IonPage>
  );
};

export default Profile;
