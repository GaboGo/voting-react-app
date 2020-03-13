import React from "react";
import ReactDOM from "react-dom";
import "./style/global.scss";
import App from "./pages/Home";
import NavBar from "./components/Nav/NavBar";
import { Container } from "react-bootstrap";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/home">
        <App />
      </Route>
      <Route exact path="/past/trial">
        <h1>Past Trial</h1>
      </Route>
      <Route exact path="/information/works">
        <h1>Information</h1>
      </Route>
      <Redirect to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
