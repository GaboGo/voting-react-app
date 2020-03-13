import React from "react";
import TrendProgress from "./TrendProgress";
import { Row, Col } from "react-bootstrap";
const Card = ({
  name,
  content,
  like,
  unLike,
  voteNow,
  img,
  section,
  time,
  isNegativeVote,
  unLikeProgress,
  likeProgress,
  totalVotes,
  main
}) => {

  return (
    <>
      <Row className={`d-flex flex-column col-lg-5 p-0 card-container ${main ? "main-card" : ""}`}>
         {main 
         ? <><div className="shadow-box"></div><div className="el"></div> 
         <div style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/${img}`})`
         }}></div>
        </> 
         : <div  className="card-back-img" 
         style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/${img}`})`
         }}></div>}
        <Col className="p-0 d-flex flex-column justify-content-end align-items-center shadow">
        <Row className="card-name-trend w-100">
            {main && 
              <span className="opinion"> What's your opinion on</span>
            }
            <Col className=" d-flex align-items-end">
            {!main && 
              <img
                style={{
                  background: isNegativeVote ? "#ffad1d" : "#1cbbb4",
                  transform: isNegativeVote ? "rotate(180deg)" : ""
                }}
                src={process.env.PUBLIC_URL + "/assets/thumbsup.png"}
              />
            }
            <p className={`m-0 d-flex align-items-end ${main ? "char-space" : ""}`}>{name}</p>
            </Col>
          </Row>
          <Row className="card-name-sub w-100">
            <Col className="d-flex">
              <p>{time}</p>
              <p>in {section}</p>
            </Col>
          </Row>
          <Row className="card-content">
            <Col>{content}</Col>
          </Row>
          {!main && 
              <Row className="card-button">
              <Col className="like-btn" onClick={like}>
                <img src={process.env.PUBLIC_URL + "/assets/thumbsup.png"} />
              </Col>
              <Col className="down-btn" lg={1} onClick={unLike}>
                <img src={process.env.PUBLIC_URL + "/assets/thumbsdown.png"} />
              </Col>
              <Col
                lg={3}
                className="vote-button d-flex justify-content-center align-items-center"
                onClick={voteNow}
              >
                <span className="m-0 w-100"> vote now</span>
              </Col>
            </Row>
          }
          {main && 
            <span style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/wordpress.png`})`
             }}  className="info"> More information</span>
          }
          {main && 
            <span className="veredict"> What’s Your Verdict?</span>
          }
          <Row className="w-100" style={{ marginTop: "33px" }}>
            <Col lg={12} className="d-flex p-0">
              <TrendProgress main={main} progress={likeProgress} total={totalVotes} />
              <TrendProgress main={main} progress={unLikeProgress} total={totalVotes} isNegativeVote />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Card;
