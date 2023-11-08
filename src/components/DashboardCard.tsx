import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonItem, IonIcon, IonThumbnail, IonLabel, IonRow } from "@ionic/react";
import { useDispatch } from "react-redux";
import { close } from 'ionicons/icons';
import { useState } from "react";
import { addUserTrace } from "../store/traces/slice";
import KorusIcon from '../svg/KorusIcon.jsx'

interface DashboardCardProps {
  temp: number; 
  index: number; 
}

const DashboardCard: React.FC<DashboardCardProps> = ({temp , index}) => {
  const dispatch = useDispatch();
  const [ isCardClosed, setIsCardClosed ] = useState(false);

  const handleCloseCard = (index) => {
    setIsCardClosed(true);

    dispatch(addUserTrace({
      cardClosed: index,
      lastInteraction: new Date().toISOString()
    }))
  }

    return (
      <IonCard className={ isCardClosed ? 'ion-hide' : '' } color={'primary'}>
        <IonCardHeader>
          <IonRow className="ion-justify-content-between">
            <IonCardTitle>Temperatura {index + 1}</IonCardTitle>
            <IonIcon 
              size={'large'} 
              icon={close}
              onClick={() => handleCloseCard(index)}
            ></IonIcon>
          </IonRow>
        </IonCardHeader>

        <IonCardContent className="ion-margin-top ion-text-center" style={{ fontSize: '22px', color: 'var(--ion-color-dark'}}>
        <IonItem color={'primary'}>
          <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="/Korus.png" />
            </IonThumbnail>
            <IonLabel style={{fontSize: '22px'}}>
            {temp} &deg;C
            </IonLabel>
        </IonItem>
        </IonCardContent>
      </IonCard>
    )

}

export default DashboardCard;