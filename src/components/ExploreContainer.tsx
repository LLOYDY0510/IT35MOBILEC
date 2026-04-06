import { IonButton, IonIcon } from '@ionic/react';
import './ExploreContainer.css';
import { heart } from 'ionicons/icons';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
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
  );
};

export default ExploreContainer;
