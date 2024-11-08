import styled from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  margin: 20px 10px 10px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 150);
    }
  }
  li.slick-active button:before {
    color: aliceblue;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -55px;
  }
  .slick-next {
    right: -55px;
  }
`;

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 2px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
// export const  = styled.``;
