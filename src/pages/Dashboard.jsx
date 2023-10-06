import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonSpinner, IonText, IonTitle, IonToolbar, IonNote } from '@ionic/react';
// Actions redux
import { getWeatherAction } from '../actions/weatherActions';
import { useDispatch, useSelector } from 'react-redux'
import DashboardCard from '../components/DashboardCard';
import SearchBar from '../components/SearchBar'

// Styled
import Button from '../styled/Button'

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
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem>
            <IonText className='ion-padding'>
                Esta es la versión prueba de una App para consultar datos de https://open-meteo.com/. En este caso, dividimos la app en 3 tabs. El primer tab, muestra una <strong>Card</strong> con la consulta a la Api que se realiza haciendo click en el siguiente botón:
            </IonText>
          </IonItem>
        <IonItem>
          <SearchBar />
          <IonNote color="primary">Under...🚧 </IonNote>
        </IonItem>
        <IonItem>
          <Button
                className='ion-padding'
                onClick={handleGetWeather}
              >
                {
                  loading
                  ? ( <IonSpinner color='light'></IonSpinner> )
                  : 'Consultar temperatura'
                }
          </Button>
        </IonItem>
          {
            hourlyData
            ? (
              <DashboardCard hourlyData={hourlyData} />
              )
              : (
                <IonItem>
                  <IonText style={{ fontSize: '16px'}}>
                    No has consultado nada :( dale click!!
                  </IonText>
                </IonItem>
            )
          }
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
