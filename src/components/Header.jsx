import { IonImg, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonCol, IonGrid, IonRow, IonRefresher,
    IonRefresherContent } from '@ionic/react';
 const Header = () => {

    return (
        <IonHeader>
            <IonToolbar>
                <IonImg
                className='ion-padding'
                src='/logo_nicequest_color_white_by_gfk.svg'
                alt='logo nicequest'
                ></IonImg>
            </IonToolbar>
        </IonHeader>
    )
 }

 export default Header;