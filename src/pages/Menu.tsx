import {  IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import { homeOutline, information, logOutOutline, settingsOutline } from 'ionicons/icons';


const Menu: React.FC = () => {
return (
    <IonPage>
     <IonSplitPane contentId="main">
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

        </IonContent>

      </IonMenu>

      <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>

      </IonRouterOutlet>
     </IonSplitPane>
    </IonPage>
  );
};

export default Menu;