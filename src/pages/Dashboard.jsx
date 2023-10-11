import { IonContent, IonHeader, IonItem, IonPage, IonSpinner, IonText, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import DashboardCard from '../components/DashboardCard';
import SearchBar from '../components/SearchBar'
import useWeatherActions from '../hooks/useWeatherActions';
import { useSelector } from 'react-redux';

// Styled
import Button from '../styled/Button'
import Header from '../components/Header';

const Dashboard = () => {
  const { handleGetWeather } = useWeatherActions();
  const loading = useSelector( state => state.weather.loading);
  const temperature = useSelector( state => state.weather.temperature);
  const location = useSelector( state => state.location.city);

  return (
    <IonPage>
      <Header />
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
                  className={`${loading ? 'ion-opacity': ''} ion-padding`}
                  style={loading ? {backgroundColor: 'var(--ion-color-tertiary)'} : {}}
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
            temperature && temperature.hourly
            ? (
              temperature.hourly.temperature_2m
              .slice(0, 10)
              .map((temp, index) => (
                <DashboardCard key={index} temp={temp} index={index} />
              ))
              )
              : (
                <IonItem>
                  <IonText className='ion-padding' style={{ fontSize: '16px'}}>
                    Introduce una ciudad y dale click! 🙂 
                  </IonText>
                </IonItem>
            )
          }
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
