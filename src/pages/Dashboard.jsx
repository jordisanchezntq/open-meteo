import { IonContent, IonHeader, IonItem, IonPage, IonSpinner, IonText, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import DashboardCard from '../components/DashboardCard';
import SearchBar from '../components/SearchBar'
import useWeatherActions from '../hooks/useWeatherActions';
import { useSelector } from 'react-redux';

// Styled
import Button from '../styled/Button'

const Dashboard = () => {
  const { handleGetWeather } = useWeatherActions();
  const loading = useSelector( state => state.weather.loading);
  const temperature = useSelector( state => state.weather.temperature);
  const location = useSelector( state => state.location.city)

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
          <IonGrid>
            <IonRow>
              <IonCol>
                <SearchBar/>
                <Button
                  className='ion-padding'
                  onClick={handleGetWeather}
                  disabled={loading}
                  expand='block'
                >
                  {loading ? <IonSpinner /> : 'Consultar tiempo'}
                </Button>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
          {
            temperature
            ? (
              <DashboardCard temperature={temperature} location={location} />
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
