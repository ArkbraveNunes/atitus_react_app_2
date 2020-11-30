import React from "react";
import FirebaseService from "../../services/firebase-service";
import { useHistory, Redirect } from "react-router-dom";

export default function Logoff() {
  let history = useHistory();
  sessionStorage.removeItem("uuid");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  FirebaseService.getAuth().signOut()
    .then(() => {
      history.push("/login");
    })
    .catch(() => {
      history.push("/login");
    });
    return <Redirect to="/login" />;
}
