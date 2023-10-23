import React from "react";
import { Container, Content, Wrap } from "./styles/TrendingElements";
import { Link } from "react-router-dom";

const Trending = ({movies}) => {
  return (
    <Container>
      <h4>Trednings</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Trending;
