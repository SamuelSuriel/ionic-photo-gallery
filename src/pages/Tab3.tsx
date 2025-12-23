import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Definición de Lenguajes
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        <IonAccordionGroup>

          <IonAccordion value="javascript">
            <IonItem slot="header">
              <IonLabel>JavaScript</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Lenguaje de programación interpretado utilizado principalmente
              para el desarrollo de aplicaciones web interactivas.
            </div>
          </IonAccordion>

          <IonAccordion value="python">
            <IonItem slot="header">
              <IonLabel>Python</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Lenguaje de programación de alto nivel, conocido por su sintaxis
              sencilla y ampliamente usado en ciencia de datos e inteligencia artificial.
            </div>
          </IonAccordion>

          <IonAccordion value="java">
            <IonItem slot="header">
              <IonLabel>Java</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Lenguaje de programación orientado a objetos que permite desarrollar
              aplicaciones robustas y multiplataforma.
            </div>
          </IonAccordion>

          <IonAccordion value="csharp">
            <IonItem slot="header">
              <IonLabel>C#</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Lenguaje desarrollado por Microsoft, utilizado principalmente
              para aplicaciones de escritorio, web y videojuegos.
            </div>
          </IonAccordion>

          <IonAccordion value="php">
            <IonItem slot="header">
              <IonLabel>PHP</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Lenguaje de programación del lado del servidor, ampliamente usado
              para el desarrollo de aplicaciones web dinámicas.
            </div>
          </IonAccordion>

        </IonAccordionGroup>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
