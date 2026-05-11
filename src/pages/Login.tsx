import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { supabase } from '../lib/supabaseclient';
import { logoGoogle } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace');
  }
const signinwithgoogle =  async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/app`
    }
  });
}
  return (
  <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent className="ion-padding">

       <IonButton expand="full" onClick={signinwithgoogle}>
        <IonIcon icon={logoGoogle}/>
       Login
    </IonButton>

     </IonContent>
      </IonPage>


  );
};

export default Login;