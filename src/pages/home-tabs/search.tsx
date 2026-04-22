 import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle } from "@ionic/react";
import { chatbox, chatboxEllipses, chatboxEllipsesOutline, shareOutline, thumbsUpOutline } from "ionicons/icons";
import { useEffect, useState } from "react";


const Search: React.FC = () => {
    const games = [
        { name: "Pokemon Yellow" },
        { name: "mega man x" },
        { name: "The legend of zelda" },
        { name: "Pacman" },
        { name: "Super Mario World" },
        { name: "BOMBERMAN" },
    ];
const [searchtext, setSearchText] = useState('');
const [filtered, setFilteredGames] = useState(games);

useEffect(() => {
    const debounced = setTimeout(() => {
        const filteredGames = games.filter(game =>
            game.name.toLowerCase().includes(searchtext.toLowerCase())
        );
        setFilteredGames(filteredGames);
    }, 400);

    return () => clearTimeout(debounced);
}, [searchtext]);
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Search</IonTitle>
            </IonButtons>
        </IonHeader>
<IonContent className="ion-padding">
 <IonSearchbar placeholder="Search games..."
 value={searchtext}
 debounce={400}
 onIonInput={(e) => setSearchText(e.detail.value!)}
/>
  
                  <IonList>
                      {filtered.map((item, index) =>
                          <><IonItem key={index}>
                              <IonLabel>{item.name}</IonLabel>
                          </IonItem><IonCard>
                                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                                  <IonCardHeader>
                                      <IonCardTitle>{item.name}</IonCardTitle>
                                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                  </IonCardHeader>
  
                                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                                  <IonGrid>
                                      <IonRow>
                                          <IonCol>
                                              <IonButton fill='clear' expand="full">
                                                  <IonIcon icon={thumbsUpOutline}></IonIcon>
                                                  <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                                              </IonButton>
                                          </IonCol>
                                          <IonCol>
                                              <IonButton fill='clear' expand="full">
                                                  <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                                                  <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                                              </IonButton>
                                          </IonCol>
                                          <IonCol>
                                              <IonButton fill='clear' expand="full">
                                                  <IonIcon icon={shareOutline}></IonIcon>
                                                  <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
                                              </IonButton>
                                          </IonCol>
                                      </IonRow>
                                  </IonGrid>
                              </IonCard></>
                      )}
                  </IonList>
  
              </IonContent>
          </IonPage>
      )
  };
export default Search;