import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TrendProgress = ({ main, progress, total, isNegativeVote }) => {
  return (
    <Container
      style={{
        width: `${(progress * 100) / 50}0%`,
        background: isNegativeVote ? "#ffad1dad" : "#5ebab696"
      }}
    >
      <Row>
        <Col
          className={`d-flex ${
            isNegativeVote
              ? "justify-content-start flex-sm-row-reverse"
              : "justify-content-start"
          } align-items-center progress-trend-card`}
        >
          <img
            className={`img-trend-style ${main ? "margin-center" : ""}`}
            style={{
              transform: isNegativeVote ? "rotate(180deg)" : "",
              margin: "10px"
            }}
            src={process.env.PUBLIC_URL + "/assets/thumbsup.png"}
          />
          {!main &&
            <p className="m-0">{Math.round((progress * 100) / total)}%</p>
          }
        </Col>
      </Row>
    </Container>
  );
};
export default TrendProgress;
