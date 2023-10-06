import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
// Actions redux
import { getWeatherAction } from '../actions/weatherActions';
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
const dispatch = useDispatch();
const loading = useSelector( state => state.weather.loading);
const weather = useSelector( state => state.weather);

const handleGetWeather = () => {
  dispatch( getWeatherAction())
}

console.log(weather.temperatures)

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
                loading
                ? ( <IonSpinner></IonSpinner> )
                : 'Consultar temperatura'
              }
            </IonButton>
        </IonContent>
      </IonContent>
      <IonContent className='ion-padding'>
        {
          weather
          ? (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle color='primary' className='ion-text-center'>
                    Temperatura:
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className='ion-padding ion-text-center'>
                  {weather.elevation}&deg;C
                </IonCardContent>
              </IonCard>
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
