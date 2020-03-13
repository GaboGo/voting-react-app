import React from "react";
import { Col, Row } from "react-bootstrap";
const ComposedText = ({ arrText }) => {
  return (
    <Row className="composed-text text-composed d-flex flex-column">
      <Col>
        <h1>{arrText[0]}</h1>
        <h2>{arrText[1]}</h2>
      </Col>
    </Row>
  );
};
export default ComposedText;
