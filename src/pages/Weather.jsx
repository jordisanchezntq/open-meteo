import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonCol, IonGrid, IonRow, IonRefresher, IonRefresherContent, IonImg } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { thermometerOutline } from 'ionicons/icons'


const Weather = () => {
  const [ temp, setTemp ] = useState([]);
  const [ refreshTrigger, setRefreshTrigger ] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector( state => state.weather.loading);
  const temperature = useSelector( state => state.weather.temperature);
  const location = useSelector( state => state.location.city)

  const handleRefresh = (e) => {
    setTimeout(()=> {
      e.detail.complete();
      setRefreshTrigger(true)
    }, 1500)
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonItem>
          <IonText style={{ padding: '10px 0px'}}>
              En segunda tab, se muestra en formato galeria diferentes datos. Aqui no se trabaja el post, sino al GET y como mostrar y ordenar diferentes elementos.
          </IonText>
        </IonItem>
        <IonGrid>
          {
            temperature && temperature.hourly ? (
              temperature.hourly.temperature_2m.map((degree, i) => (
                i % 2 === 0 ? (
                  <IonRow key={i}>
                    <IonCol className="ion-text-center">{degree} &deg; C</IonCol>
                    {temperature.hourly.temperature_2m[i] && (
                      <IonCol className="ion-text-center">
                        <IonImg src='/tree.jpeg' />
                      </IonCol>
                    )}
                  </IonRow>
                ) : (
                  null // Puedes usar 'null' en lugar de una cadena vacía.
                )
              ))
            ) : (
              null // Puedes usar 'null' en lugar de una cadena vacía.
            )
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Weather;
