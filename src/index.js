import React from "react";
import ReactDOM from "react-dom";
import "./style/global.scss";
import App from "./pages/Home";
import NavBar from "./components/Nav/NavBar";
import { Container, Col, Row } from "react-bootstrap";
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
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <h1>Coming Soon!</h1>
            </Col>
          </Row>
        </Container>
      </Route>
      <Route exact path="/information/works">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <h1>Coming Soon!</h1>
            </Col>
          </Row>
        </Container>
      </Route>
      <Redirect to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
