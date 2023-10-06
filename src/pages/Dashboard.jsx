import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
// Actions redux
import { getWeatherAction } from '../actions/weatherActions';
import { useDispatch, useSelector } from 'react-redux'
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
const dispatch = useDispatch();
const loading = useSelector( state => state.weather.loading);
const temperature = useSelector( state => state.weather.temperatures[0]);

const handleGetWeather = () => {
  dispatch( getWeatherAction())
}

// Getting values
const hourlyData = temperature?.hourly.temperature_2m;
console.log(hourlyData)

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
        <IonItem class='ion-padding'>
          <IonText>
            Esta es la versión prueba de una App para consultar datos de https://open-meteo.com/. En este caso, dividimos la app en 3 tabs. El primer tab, muestra una <strong>Card</strong> con la consulta a la Api que se realiza haciendo click en el siguiente botón:
          </IonText>
        </IonItem>
        <IonButton
              expand='block'
              className='ion-padding'
              onClick={handleGetWeather}
            >
              {
                loading
                ? ( <IonSpinner></IonSpinner> )
                : 'Consultar temperatura'
              }
            </IonButton>
      </IonContent>
      <IonContent>
        {
          hourlyData
          ? (
             <DashboardCard hourlyData={hourlyData} />
          )
          : (
            <IonText className='ion-padding ion-text-center'>
              No has consultado nada :(
            </IonText>
          )
        }
       
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
