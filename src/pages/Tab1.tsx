import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Integrantes del Grupo A
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div className="center-content">

          <IonLabel>
            <h2>Miembros del equipo</h2>
          </IonLabel>

           <IonLabel>
          <p>Integrante 1: Sthefany Angeles Rodríguez | M. 100063069</p>
        </IonLabel>

        <IonLabel>
          <p>Integrante 2: Joss Mille Mateo | M. 100045501</p>
        </IonLabel>

        <IonLabel>
          <p>Integrante 3: Samuel Ramirez Suriel | M. 100030340</p>
        </IonLabel>

        <IonLabel>
          <p>Integrante 4: Edrinson Alejo Mejia | M. 100067401</p>
        </IonLabel>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
