import {IonButton,IonContent,IonHeader,IonIcon,IonItem,IonMenu,IonMenuToggle,IonPage,IonRouterOutlet,IonSplitPane, IonTitle, IonToolbar,
} from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { homeOutline, information, logOutOutline, settingsOutline } from 'ionicons/icons';

import Home from './Home';


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

        </IonMenu>

          

     

      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;