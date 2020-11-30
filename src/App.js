import React from "react";
import "./assets/css/main.css";
import Footer from "./components/Footer";

import Home from "./pages/private/Home";
import Logoff from "./pages/private/Logoff";
import Task from "./pages/private/Task";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Register from "./pages/Register";

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const PrivateRoute = ({ component: Component }) => {
    return (
      <Route
        render={(props) => {
          if (sessionStorage.getItem('uuid')) {
            return <Component {...props} />;
          } else {
            return <Redirect to={{ pathname: "/login" }} />;
          }
        }}
      />
    );
  };

  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/register" exact={true} component={Register} />
          <Route path="/tasks" exact={true} component={Tasks} />
          <PrivateRoute path="/logoff" exact={true} component={Logoff} />
          <PrivateRoute path="/home" exact={true} component={Home} />
          <PrivateRoute path="/tasks/new" component={Task} />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
