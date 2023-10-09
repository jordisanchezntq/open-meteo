import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItemDivider } from "@ionic/react";
import styled from 'styled-components'

const TemperatureList = styled.li`
font-size: 22px;
padding: 5px;
`

const DashboardCard = ({temperature, location}) => {

  const infoTemp = temperature.hourly.temperature_2m;
  const maxTemp = Math.max(...infoTemp);
  const minTemp = Math.min(...infoTemp);

    return (
      <IonCard>
        <IonCardHeader color='dark'>
          <IonCardTitle className='ion-text-center' style={{ fontSize: '20px'}}>
            Últimas temperaturas:
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className='ion-text-center'>
          <ul style={{listStyle: 'none', textAlign: 'start', padding: 0}}>
            <IonItemDivider color={'dark'}>
              <TemperatureList>
                Ciudad consultada: <br />
                {location.results && location.results[0].name}
              </TemperatureList>
            </IonItemDivider>
            <IonItemDivider color={'danger'}>
              <TemperatureList>
                Temp. máxima: {maxTemp} &deg;C
              </TemperatureList>
            </IonItemDivider>
            <IonItemDivider color={'secondary'}>
              <TemperatureList>
                Temp. mínima {minTemp} &deg;C
              </TemperatureList>
            </IonItemDivider>
          </ul>
        </IonCardContent>
      </IonCard>
    )

}

export default DashboardCard;