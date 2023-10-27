import { IonImg, IonHeader, IonRow, IonText, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon} from '@ionic/react';
import { Link } from 'react-router-dom';
import KorusIcon from '../svg/KorusIcon.jsx'
import Button from '../styled/Button';

 const Header: React.FC = () => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const logoSrc = !isDarkMode ? '/logo_dark.png' : '/logo_light.svg'

    return (
        <IonHeader>
            <IonToolbar style={{ padding: '10px 15px'}}>
                <IonButtons className='ion-justify-content-between'>
                        <Link to='/'>
                            <IonImg
                            slot='start'
                            src={logoSrc}
                            alt='logo nicequest'
                            style={{ width: '160px'}}
                            ></IonImg>
                        </Link>
                        <IonButton
                        className='btn'
                            >
                                <KorusIcon />
                                40
                        </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
 }

 export default Header;