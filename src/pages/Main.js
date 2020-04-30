import React from "react";
import CardsContainer from "../components/card/CardsContainer";
import TextContainer from "../components/Text/TextContainer";
import { Container, Col, Row } from "react-bootstrap";
const Main = ({ handleVoting, cards }) => {
  return (
    <main>
      <Container fluid={true}>
        <Row className="w-100 d-flex justify-content-center align-items-center">
          <Col>
            <TextContainer
              composedText={["Speak out. Be Heard.", "Be counted"]}
              contentText="rule of thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report"
            />
          </Col>
          <h1 className="content-title">Votes</h1>
          <Col lg={11}>
            <CardsContainer handleOnClick={handleVoting} data={cards} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Main;
