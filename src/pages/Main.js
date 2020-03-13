import React from "react";
import Cards from "../components/card/Container";
import Adds from "../components/Text/Container";
import { Container, Col, Row } from "react-bootstrap";
const Main = ({ boxes }) => {
  return (
    <main>
      <Container fluid={true}>
        <Row className="w-100 d-flex justify-content-center align-items-center">
          <Col>
            <Adds
              composedText={["Speak out. Be Heard.", "Be counted"]}
              contentText="rule of thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report"
            />
          </Col>
          <h1 className="content-title">Votes</h1>
          <Col lg={11}>
            <Cards data={boxes} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Main;
