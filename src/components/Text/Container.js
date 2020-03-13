import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ComposedText from "./ComposedText";
import ContentText from "./Content";
import CloseIcon from "./CloseIcon";
export default class extends React.Component {
  state = {
    isHidde: true
  };
  hiddeElement = () => {
    this.setState(prev => ({
      isHidde: !prev.isHidde
    }));
  };
  render() {
    const { composedText, contentText } = this.props;
    const { isHidde } = this.state;
    return (
      <Container
        className="card-text-container"
        style={{ padding: isHidde ? "0px" : "34px" }}
      >
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{
            padding: "16px",
            background: isHidde ? "#ebebeb" : "",
            marginTop: "20px"
          }}
        >
          <Col
            lg={2}
            style={{ display: isHidde ? "block" : "none", minWidth: "200px" }}
          >
            <ComposedText arrText={composedText} />
          </Col>
          <Col style={{ display: isHidde ? "block" : "none" }}>
            <ContentText text={contentText} />
          </Col>
          <Col
            lg={1}
            className="d-flex justify-content-center align-items-center"
            onClick={this.hiddeElement}
          >
            <CloseIcon />
          </Col>
        </Row>
      </Container>
    );
  }
}
