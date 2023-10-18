import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { appsOutline, personCircleOutline, homeOutline } from 'ionicons/icons';
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather';
import Contact from './pages/Profile';

// Redux
import { Provider} from 'react-redux';
import store from './store/store.js';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Provider store={store}>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/weather">
              <Weather />
            </Route>
            <Route path="/profile">
              <Contact />
            </Route>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon aria-hidden="true" icon={homeOutline} size='large' />
            </IonTabButton>
            <IonTabButton tab="weather" href="/weather">
              <IonIcon aria-hidden="true" icon={appsOutline} size='large' />
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon aria-hidden="true" icon={personCircleOutline} size='large' />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
