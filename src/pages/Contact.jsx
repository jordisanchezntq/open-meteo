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

const Contact = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className='ion-padding'>
          <IonText>
              En esta tercera tab, se simula un formulario de contacto que finalizará con la creación del objeto con los datos introducidos en el state d ela aplicación, y se trabajará con la validación de los inputs.
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

export default Contact;
