import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { codeSlash } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Lenguajes de Programación
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div className="list-center">

          <IonList>

            <IonItem>
              <IonIcon icon={codeSlash} slot="start" />
              <IonLabel>JavaScript</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={codeSlash} slot="start" />
              <IonLabel>Python</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={codeSlash} slot="start" />
              <IonLabel>Java</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={codeSlash} slot="start" />
              <IonLabel>C#</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={codeSlash} slot="start" />
              <IonLabel>PHP</IonLabel>
            </IonItem>

          </IonList>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
