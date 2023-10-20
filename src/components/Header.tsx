import { IonImg, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon} from '@ionic/react';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

 const Header: React.FC = () => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const logoSrc = !isDarkMode ? '/logo_dark.png' : '/logo_light.svg'

    return (
        <IonHeader>
            <IonToolbar style={{ padding: '10px 15px'}}>
                <IonButtons>
                    <Link to='/'>
                        <IonImg
                        slot='start'
                        src={logoSrc}
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