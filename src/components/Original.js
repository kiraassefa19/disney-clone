import React from "react";
import { Container, Content, Wrap } from "./styles/OriginalsElements";
import { Link } from "react-router-dom";

const Originals = ({ movies }) => {
  return (
    <Container>
      <h4>Originals</h4>
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

export default Originals;
