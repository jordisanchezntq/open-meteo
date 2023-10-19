import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTextarea,
  IonToggle,
  IonToolbar,
  IonTitle,
  IonPage,
  IonText,
  IonNavLink
} from '@ionic/react';
import Header from '../components/Header';
import { Input } from '../styled/Input';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen={true}>
          <IonItem>
            <IonText style={{ padding: '10px 0px'}}>
              En esta tab se simula el dashboard de info personal, y acciones de cambiar email y la password.
            </IonText>
          </IonItem>
          <IonList inset={true}>
            <IonItem>
              <Input label="Email"></Input>
            </IonItem>
            <IonItem>
              <Input label="Password"></Input>
            </IonItem>
            <IonItem>
              <IonToggle>
                <IonLabel>Suscribirse</IonLabel>
                <IonNote color="medium">Podrás cancelar suscripción en cualquier momento</IonNote>
              </IonToggle>
            </IonItem>
          </IonList>

          <IonList inset={true} className='ion-padding ion-text-center'>
            <IonNavLink routerDirection='forward' component={''}>
              <IonLabel color='primary'>
                Olvidaste tu contraseña
              </IonLabel>
            </IonNavLink>
          </IonList>

        </IonContent>
    </IonPage>
  );
};

export default Profile;
