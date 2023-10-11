import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonItemDivider, IonIcon } from "@ionic/react";
import styled from 'styled-components';
import { close } from 'ionicons/icons';
import { useState } from "react";

const DashboardCard = ({temp}) => {
  const [ isCardClosed, setIsCardClosed ] = useState(false)

  const handleCloseCard = () => {
    setIsCardClosed(true);
  }

  // const maxTemp = Math.max(...infoTemp);
  // const minTemp = Math.min(...infoTemp);

    return (
      <IonCard style={{ display: isCardClosed ? 'none' : 'block' }}>
        <IonCardHeader>
          <IonCardTitle>Temperatura</IonCardTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div></div> {/* Esto crea un espacio en blanco */}
            <IonIcon 
            size={'large'} 
            icon={close}
            onClick={handleCloseCard}
            ></IonIcon>
          </div>
        </IonCardHeader>

        <IonCardContent>{temp} &deg;C</IonCardContent>
      </IonCard>
    )

}

export default DashboardCard;