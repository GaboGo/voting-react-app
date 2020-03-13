import React from "react";
import CoverCard from "./CoverCard";
import Closing from "./Closing";
const Header = ({
  character,
  section,
  time,
  description,
  img,
  votesDown,
  votesUp
}) => {
  return (
    <>
      <header
        className="header d-flex flex-column justify-content-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/fransisco.jpg)`
        }}
      >
        <CoverCard
          character={character}
          section={section}
          time={time}
          description={description}
          img={img}
          votesDown={votesDown}
          votesUp={votesUp}
        />
      </header>
      <Closing />
    </>
  );
};
export default Header;
