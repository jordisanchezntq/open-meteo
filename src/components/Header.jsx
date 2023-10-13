import { IonImg, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonCol, IonGrid, IonRow, IonRefresher,
    IonRefresherContent, 
    IonButtons} from '@ionic/react';
 const Header = () => {
    return (
        <IonHeader>
            <IonToolbar color={'primary'} style={{ padding: '0px 15px'}}>
                <IonButtons>
                    <IonImg
                    slot='start'
                    src='/logo_nicequest_color_white_by_gfk.svg'
                    alt='logo nicequest'
                    style={{ width: '160px'}}
                    href="/weather"
                    ></IonImg>
                </IonButtons>
                <IonButtons
                slot='end'
                >
                    Login
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
 }

 export default Header;