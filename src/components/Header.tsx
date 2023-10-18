import { IonImg, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon} from '@ionic/react';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

 const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar color={'primary'} style={{ padding: '10px 15px'}}>
                <IonButtons>
                    <Link to='/'>
                        <IonImg
                        slot='start'
                        src='/logo_nicequest_color_white_by_gfk.svg'
                        alt='logo nicequest'
                        style={{ width: '160px'}}
                        ></IonImg>
                    </Link>
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