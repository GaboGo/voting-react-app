import React from "react";
import Card from "../components/card/Card";
const CoverCard = ({
  character,
  section,
  time,
  description,
  img,
  votesDown,
  votesUp
}) => {
  return (
    <Card
      key={character}
      name={character}
      section={section}
      time={time}
      content={description}
      img={img}
      isNegativeVote={votesDown > votesUp ? true : false}
      unLikeProgress={votesDown}
      likeProgress={votesUp}
      main
    ></Card>
  );
};
export default CoverCard;
