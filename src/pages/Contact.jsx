import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonItem } from '@ionic/react';

const Contact = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className='ion-padding'>
          <IonText>
              En esta tercera tab, se simula un formulario de contacto que finalizará con la creación del objeto con los datos introducidos en el state d ela aplicación, y se trabajará con la validación de los inputs.
          </IonText>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
