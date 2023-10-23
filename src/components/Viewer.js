import React from "react";
import { Container, Wrap } from "./styles/ViewerElements";

const Viewer = () => {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='Disney' />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/video/1564674844-disney.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png' alt='Pixar' />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/video/1564676714-pixar.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png' alt='Marvel' />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/video/1564676115-marvel.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png' alt='Starwars' />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/video/1608229455-star-wars.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png' alt='National Geography' />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src='/video/1564676296-national-geographic.mp4'
            type='video/mp4'
          />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewer;
