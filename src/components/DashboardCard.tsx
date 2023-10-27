import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonItem, IonIcon, IonThumbnail, IonLabel } from "@ionic/react";
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
      <IonCard className={ isCardClosed ? 'ion-hide' : '' }>
        <IonCardHeader color={'primary'}>
          <IonCardTitle>Temperatura {index + 1}</IonCardTitle>
          <IonIcon 
            size={'large'} 
            icon={close}
            onClick={() => handleCloseCard(index)}
          ></IonIcon>
        </IonCardHeader>

        <IonCardContent className="ion-margin-top ion-text-center" style={{ fontSize: '22px', color: 'var(--ion-color-dark'}}>
          
        <IonItem>
          <KorusIcon />
          <IonText>
            {temp} &deg;C
          </IonText>
        </IonItem>
          
        </IonCardContent>
      </IonCard>
    )

}

export default DashboardCard;