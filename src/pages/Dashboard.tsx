import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonNavLink,
  IonItemDivider,
  IonButton,
} from "@ionic/react";
import DashboardCard from "../components/DashboardCard";
import SearchBar from "../components/SearchBar";
import { setError } from "../store/weather/slice.js";
import useWeatherActions from "../hooks/useWeatherActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Styled
import Button from "../styled/Button";
import Header from "../components/Header";
import DashboardDevices from "./DashboardDevices";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { handleGetWeather } = useWeatherActions();
  const loading = useSelector((state: any) => state.weather.loading);
  const temperature = useSelector((state: any) => state.weather.temperature);
  const error = useSelector((state: any) => state.weather.error);

  useEffect(() => {
    if (error) {
      setIsOpen(true);
    }
  }, [error]);

  return (
    <IonPage>
      <Header />
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonItem>
              <IonCol size="12">
                <IonNavLink
                  className="ion-margin-bottom"
                  routerDirection="forward"
                  component={() => <DashboardDevices />}
                >
                  <Button>Devices</Button>
                </IonNavLink>
              </IonCol>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <SearchBar
                        handleGetWeather={handleGetWeather}
                        className="ion-margin-bottom"
                      />

                      <Button
                        className={`${
                          loading ? "ion-opacity" : ""
                        } ion-margin-bottom`}
                        style={
                          loading
                            ? { backgroundColor: "var(--ion-color-danger)" }
                            : {}
                        }
                        onClick={handleGetWeather}
                        disabled={loading}
                      >
                        {loading ? <IonSpinner /> : "Consultar tiempo"}
                      </Button>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              {error ? (
                <IonAlert
                  isOpen={isOpen}
                  header="Ops!"
                  message="Debes introducir una ciudad"
                  buttons={[
                    {
                      text: "Ok!",
                    },
                  ]}
                  onDidDismiss={() => {
                    setIsOpen(false);
                    dispatch(setError(false));
                  }}
                ></IonAlert>
              ) : (
                <>
                  {temperature && temperature.hourly ? (
                    temperature.hourly.temperature_2m
                      .slice(0, 10)
                      .map((temp: any, index: any) => (
                        <DashboardCard key={index} temp={temp} index={index} />
                      ))
                  ) : (
                    <IonCol>
                      <IonText style={{ fontSize: "16px" }}>
                        <div className="ion-text-center">
                          Introduce una ciudad y dale click! 🙂
                        </div>
                      </IonText>
                    </IonCol>
                  )}
                </>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
