import { IonImg, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon} from '@ionic/react';
import { ellipsisHorizontalOutline } from 'ionicons/icons';

 const Header = () => {
    return (
        <IonHeader>
            <IonToolbar color={'primary'} style={{ padding: '10px 15px'}}>
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
                    <IonIcon icon={ellipsisHorizontalOutline} />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
 }

 export default Header;