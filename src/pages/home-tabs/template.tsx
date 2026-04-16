
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const Template: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton></IonMenuButton>
              <IonTitle>template</IonTitle>
          </IonButtons>
            </IonToolbar>
      </IonHeader>
      <IonContent className='ion-pading'>
        <h1>template</h1>  
      </IonContent>
    </IonPage>
  );
};

export default Template;
