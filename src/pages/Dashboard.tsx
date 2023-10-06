import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import BouncingDiv from '../fela/BouncingDiv';

const Dashboard = () => {
const [ city, setCity ] = useState('');
const [ weather, setWeather ] = useState<{ hourly: {
  temperature_2m: number[]
}}>({
  hourly: {
    temperature_2m: []
  }
});
const [isLoading, setIsLoading] = useState(false);

const handleGetWeather = async () => {
  setIsLoading(true)
  const result = await fetch(`${import.meta.env.VITE_API_URL}`);
  const data = await result.json();

  // setting state of weather and loading spinner out
  setWeather(data);
  setIsLoading(false)
}

// Destructuring weather
  const { hourly: { temperature_2m } } = weather;
  const currentTemp: number = temperature_2m[0]


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class='ion-padding'>
          <IonText>
            Esta es la versión prueba de una App para consultar datos de https://open-meteo.com/. En este caso, dividimos la app en 3 tabs. El primer tab, muestra una <strong>Card</strong> con la consulta a la Api que se realiza haciendo click en el siguiente botón:
          </IonText>
            <IonButton
              expand='block'
              className='ion-margin-top'
              onClick={handleGetWeather}
            >
              {
                isLoading
                ? ( <IonSpinner></IonSpinner> )
                : 'Consultar temperatura'
              }
            </IonButton>
        </IonContent>
      </IonContent>
      <IonContent className='ion-padding'>
        {
          currentTemp
          ? (
            <BouncingDiv>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle color='primary' className='ion-text-center'>
                    Temperatura:
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className='ion-padding ion-text-center'>
                  {currentTemp}&deg;C
                </IonCardContent>
              </IonCard>

            </BouncingDiv>
          )
          : (
            <IonText className='ion-text-center'>
              No has consultado nada :(
            </IonText>
          )
        }
       
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
