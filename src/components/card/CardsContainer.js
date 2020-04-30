import React from "react";
import Card from "./Card";
import { Container } from "react-bootstrap";

class CardsContainer extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    return prevProps.data.length !== this.props.data.length;
  }
  render() {
    const { data } = this.props;

    return (
      <Container
        fluid={true}
        className="d-flex flex-wrap justify-content-center"
      >
        {data.map((inf, i) => (
          <Card
            key={`${inf.character}-${i}`}
            id={i+1}
            name={inf.character}
            section={inf.section}
            time={inf.time}
            content={inf.description}
            img={inf.img}
            voteNow={this.props.handleOnClick}
            isNegativeVote={inf.votesDown > inf.votesUp ? true : false}
            unLikeProgress={inf.votesDown}
            totalVotes={inf.total}
            main={false}
            likeProgress={inf.votesUp}
          />
        ))}
      </Container>
    );
  }
}

export default CardsContainer;
