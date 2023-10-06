import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonCol, IonGrid, IonRow } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWeatherAction } from '../actions/weatherActions';


const Weather = () => {
  const [ temp, setTemp ] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector( state => state.weather.loading);
  const temperature = useSelector( state => state.weather.temperatures[0]);

  useEffect(() => {
    const getTemperatures = () => dispatch( getWeatherAction() );
    getTemperatures();
    
    const hourlyData = temperature?.hourly.temperature_2m;
    setTemp(hourlyData)
  }, [])

  console.log(temp)


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='light'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className='ion-padding'>
          <IonText>
              En segunda tab, se muestra en formato galeria diferentes datos. Aqui no se trabaja el post, sino al GET y como mostrar y ordenar diferentes elementos.
          </IonText>
        </IonItem>
        <IonGrid>
          { temp &&
            temp.map((degree, i) => (
              i % 2 === 0 ? (
                <IonRow key={i}>
                  <IonCol className="ion-text-center">{degree} &deg; C</IonCol>
                  {temp[i + 1] && <IonCol className='ion-text-center'>{temp[i + 1]}</IonCol>}
                </IonRow>
              ) : null
            ))
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Weather;
