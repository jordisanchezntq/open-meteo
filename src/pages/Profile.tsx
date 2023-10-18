import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTextarea,
  IonToggle,
  IonToolbar,
  IonTitle,
  IonPage,
  IonText
} from '@ionic/react';
import Header from '../components/Header';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header />
        <IonHeader collapse="condense">
          <IonToolbar color='light'>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='light' fullscreen={true}>
          <IonItem>
            <IonText style={{ padding: '10px 0px'}}>
              En esta tab se simula el dashboard de info personal, y acciones de cambiar email y la password.
            </IonText>
          </IonItem>
          <IonContent>
          <IonList inset={true}>
            <IonItem>
              <IonInput label="Nombre"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Email"></IonInput>
            </IonItem>
            <IonItem>
              <IonToggle>
                <IonLabel>Suscribirse</IonLabel>
                <IonNote color="medium">Podrás cancelar suscripción en cualquier momento</IonNote>
              </IonToggle>
            </IonItem>
          </IonList>

          <IonList inset={true}>
            <IonItem>
              <IonTextarea label="Mensaje" label-placement="floating" rows={5}></IonTextarea>
            </IonItem>
          </IonList>
        </IonContent>

        </IonContent>
    </IonPage>
  );
};

export default Profile;
