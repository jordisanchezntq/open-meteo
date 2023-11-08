import { IonImg, IonHeader, IonRow, IonText, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonGrid, IonCol, IonLabel} from '@ionic/react';
import { Link } from 'react-router-dom';
import KorusIcon from '../svg/KorusIcon.jsx'
import Button from '../styled/Button';

 const Header: React.FC = () => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const logoSrc = !isDarkMode ? '/logo_dark.png' : '/logo_light.svg'

    return (
        <IonHeader>
                <IonGrid>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='6'>
                            <Link to='/'>
                                <IonImg
                                slot='start'
                                src={logoSrc}
                                alt='logo nicequest'
                                style={{ width: '100px'}}
                                ></IonImg>
                            </Link>
                        </IonCol>
                        <IonCol size='6'>
                            <IonButton
                            className='btn ion-flex-end'
                                >
                                    <IonLabel>
                                        40
                                    </IonLabel>
                                    <IonLabel className='ion-padding-start'>
                                        Korus
                                    </IonLabel>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
        </IonHeader>
    )
 }

 export default Header;