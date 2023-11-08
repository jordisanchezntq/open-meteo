import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText } from '@ionic/react'
import React from 'react'
import Header from '../components/Header'

const ErrorPage: React.FC = () => {
  return (
    <IonPage>
        <IonContent className='ion-padding'>
            <IonCard color='danger'>
                <IonCardHeader>
                    <IonCardTitle className='ion-padding'>Uppps!</IonCardTitle>
                    <IonCardSubtitle className='ion-padding'>Ha habido un error</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonItem color='danger'>
                        <IonText>
                        Lo sentimos, pero la página que estás buscando no existe. Puede que se haya eliminado, movido o que haya habido un error.
                        </IonText>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
  )
}

export default ErrorPage