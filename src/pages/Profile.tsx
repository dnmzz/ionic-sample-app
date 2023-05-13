import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonButton,
  IonButtons,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { IonItem, IonLabel, IonAvatar } from "@ionic/react";
import { getUsers } from "../services/users/UsersService";
import Cookies from "js-cookie";

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  const [users, setUsers] = useState<Array<any>>([]);
  const token = Cookies.get("accessToken");

  const handleLogout = () => {
    Cookies.remove("accessToken");
    history.push("/login");
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchUsers = async () => {
      const users = await getUsers(token);
      setUsers(users);
    };

    fetchUsers();
  }, [token]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dasboard</IonTitle>
          <IonButtons slot="end">
            <IonButton slot="end" onClick={handleLogout}>
              Logout
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h4>Welcome: {match.params.id}</h4>
              <IonItemDivider></IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {users.map((user, i) => {
                return (
                  <IonItem key={i}>
                    <IonAvatar>
                      <img src={user.avatar} alt=""/>
                    </IonAvatar>
                    <IonLabel>
                      <h2 style={{ paddingLeft: "10px" }}>{user.username} </h2>
                      <p style={{ paddingLeft: "10px" }}>{user.email}</p>
                    </IonLabel>
                  </IonItem>
                );
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
