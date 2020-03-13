import React from "react";
import { Col, Row } from "react-bootstrap";
const ContentText = ({ text }) => {
  return (
    <Row className="text-content d-flex flex-column">
      <Col className="content-text">
        <h1>{text}</h1>
      </Col>
    </Row>
  );
};
export default ContentText;
