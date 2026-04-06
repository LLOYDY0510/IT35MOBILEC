import {IonButton,IonContent,IonHeader,IonIcon,IonPage,IonTitle,IonToolbar,} from '@ionic/react';
import { heart } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

      
        <div className="ion-padding">
          <IonButton>Default</IonButton>

          <IonButton shape="round">Round</IonButton>

          <IonButton>
            <IonIcon slot="icon-only" icon={heart} />
          </IonButton>

          <IonButton shape="round">
            <IonIcon slot="icon-only" icon={heart} />
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;