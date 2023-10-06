import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonCol, IonGrid, IonRow, IonRefresher,
  IonRefresherContent } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWeatherAction } from '../actions/weatherActions';


const Weather = () => {
  const [ temp, setTemp ] = useState([]);
  const [ refreshTrigger, setRefreshTrigger ] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector( state => state.weather.loading);
  const temperature = useSelector( state => state.weather.temperatures[0]);

  useEffect(() => {
    const getTemperatures = () => dispatch( getWeatherAction() );
    getTemperatures();
    
    const hourlyData = temperature?.hourly.temperature_2m;
    setTemp(hourlyData)
    setRefreshTrigger(false)
  }, [refreshTrigger])

  const handleRefresh = (e) => {
    setTimeout(()=> {
      e.detail.complete();
      setRefreshTrigger(true)
    }, 1500)
  }

  console.log(temp)


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='light' fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar color='primary'>
            <IonTitle>Weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonItem color='primary'>
          <IonText style={{ padding: '10px 0px'}}>
              En segunda tab, se muestra en formato galeria diferentes datos. Aqui no se trabaja el post, sino al GET y como mostrar y ordenar diferentes elementos.
          </IonText>
        </IonItem>
        <IonItem color='primary'>
          <IonText style={{ padding: '10px 0px'}}>
              Esta ab tiene incorporado un componente de <strong>refresh trigger</strong>. Prueba a desplazar la pantalla hacía abajo y se disparará. Dura 1.5 segundos.
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
