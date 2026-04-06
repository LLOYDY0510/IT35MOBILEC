import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace');
  }
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
            </IonToolbar>
          </IonHeader>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;