import React, { useEffect } from "react";
import {
  IonButton,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRouterLink,
  IonRow,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import Action from "../components/Action";
import styles from "./Home.module.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Home: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    // Check if the access token exists in cookies
    const accessToken = cookies.get("accessToken");
    if (accessToken) {
      // Redirect to the dashboard
      history.push(`/dashboard/`);
    }
  }, [history]); // Empty dependency array to run this effect only once



  return (
    <IonPage className={styles.homePage}>
      <IonHeader>
        <IonImg src="https://raw.githubusercontent.com/alanmontgomery/ionic-react-login/main/public/assets/login2.jpeg" />
      </IonHeader>
      <IonContent fullscreen>
        <div className={styles.getStarted}>
          <IonGrid>
            <IonRow
              className={`ion-text-center ion-justify-content-center ${styles.heading}`}
            >
              <IonCol size="11" className={styles.headingText}>
                <IonCardTitle>
                  Join millions of other people discovering their creative side
                </IonCardTitle>
              </IonCol>
            </IonRow>

            <IonRow className={`ion-text-center ion-justify-content-center`}>
              <IonRouterLink routerLink="/signup" className="custom-link">
                <IonCol size="11">
                  <IonButton
                    className={`${styles.getStartedButton} custom-button`}
                  >
                    Get started &rarr;
                  </IonButton>
                </IonCol>
              </IonRouterLink>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>

      <IonFooter>
        <IonGrid>
          <Action
            message="Already got an account?"
            text="Login"
            link="/login"
          />
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
