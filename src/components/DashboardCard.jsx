import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";

const DashboardCard = ({hourlyData}) => {

    return (
        <IonCard>
        <IonCardHeader color='primary'>
          <IonCardTitle className='ion-text-center' style={{ fontSize: '20px'}}>
            Últimas temperaturas:
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className='ion-padding ion-text-center'>
          <ul style={{listStyle: 'none', textAlign: 'start'}}>
            { hourlyData.map((degree, id) => (
              <li key={id} style={{fontSize: '18px'}}>{degree} &deg;C</li>
            ))}
          </ul>
        </IonCardContent>
      </IonCard>
    )

}

export default DashboardCard;