import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonItem } from '@ionic/react';

const Weather = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
      </IonContent>
    </IonPage>
  );
};

export default Weather;
