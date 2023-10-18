import { IonContent, IonHeader, IonItem, IonPage, IonSpinner, IonText, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonAlert } from '@ionic/react';
import DashboardCard from '../components/DashboardCard';
import SearchBar from '../components/SearchBar'
import { setError } from '../store/weather/slice.js' 
import useWeatherActions from '../hooks/useWeatherActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Styled
import Button from '../styled/Button'
import Header from '../components/Header';

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { handleGetWeather } = useWeatherActions();
  const loading = useSelector( state => state.weather.loading);
  const temperature = useSelector( state => state.weather.temperature);
  const error = useSelector(state => state.weather.error);

  useEffect(() => {
    if (error) {
      setIsOpen(true);
    }
  }, [error]);

  return (
    <IonPage>
      <Header />
        <IonHeader collapse="condense">
          <IonToolbar color='light'>
            <IonTitle>Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent color='light'>
        <IonGrid>
          <IonRow color='light'>
            <IonCol size='12'>
              <IonItem color='light'>
                <IonText>
                  <p>
                    Esta es la versión prueba de una App para consultar datos de https://open-meteo.com/. En este caso, dividimos la app en 3 tabs. El primer tab, muestra una <strong>Card</strong> con la consulta a la Api que se realiza haciendo click en el siguiente botón:
                  </p>
                </IonText>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12'>
              <IonItem color='light'>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <SearchBar/>
                      <Button
                        className={`${loading ? 'ion-opacity': ''} ion-padding`}
                        style={loading ? {backgroundColor: 'var(--ion-color-danger)'} : {}}
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
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size='12'>
              {
                error ? (
                  <IonAlert
                    color='light'
                    isOpen={isOpen}
                    header="Ops!"
                    message="Debes introducir una ciudad"
                    buttons={[
                      {
                        text: 'Ok!',
                      }
                    ]}
                    onDidDismiss={() =>{
                      setIsOpen(false)
                      dispatch(setError(false))
                    }}
                  ></IonAlert>
                ) : (
                  <>
                    {
                      temperature && temperature.hourly
                      ? (
                        temperature.hourly.temperature_2m
                        .slice(0, 10)
                        .map((temp: any, index: any) => (
                          <DashboardCard key={index} temp={temp} index={index} />
                        ))
                        )
                        : (
                          <IonItem color='light'>
                            <IonText className='ion-padding' style={{ fontSize: '16px'}}>
                              Introduce una ciudad y dale click! 🙂 
                            </IonText>
                          </IonItem>
                      )
                    }
                  </>
                )
              }
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
