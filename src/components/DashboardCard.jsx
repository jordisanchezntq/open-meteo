import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonItemDivider, IonIcon } from "@ionic/react";
import { useDispatch } from "react-redux";
import { close } from 'ionicons/icons';
import { useState } from "react";
import { setTracingsAction } from "../store/traces/slice";

const DashboardCard = ({temp, index}) => {
  const dispatch = useDispatch();
  const [ isCardClosed, setIsCardClosed ] = useState(false);

  const handleCloseCard = (index) => {
    setIsCardClosed(true);

    dispatch(setTracingsAction({
      cardClosed: index,
      lastInteraction: new Date().toISOString()
    }))
  }

  // const maxTemp = Math.max(...infoTemp);
  // const minTemp = Math.min(...infoTemp);

    return (
      <IonCard className={ isCardClosed ? 'ion-hide' : '' }>
        <IonCardHeader color={'primary'}>
          <IonCardTitle>Temperatura {index + 1}</IonCardTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div></div> {/* Esto crea un espacio en blanco */}
            <IonIcon 
            size={'large'} 
            icon={close}
            onClick={() => handleCloseCard(index)}
            ></IonIcon>
          </div>
        </IonCardHeader>
        <IonCardContent className="ion-margin-top ion-text-center" style={{ fontSize: '22px', color: 'var(--ion-color-dark'}}> {temp} &deg;C</IonCardContent>
      </IonCard>
    )

}

export default DashboardCard;