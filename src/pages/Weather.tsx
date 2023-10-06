import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Weather: React.FC = () => {
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
        <IonText>
            En segunda tab, se muestra en formato galeria diferentes datos. Aqui no se trabaja el post, sino al GET y como mostrar y ordenar diferentes elementos.
        </IonText>
       
      </IonContent>
    </IonPage>
  );
};

export default Weather;
