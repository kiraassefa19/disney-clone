import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
export const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
export const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
export const ContentMeta = styled.div`
  max-width: 874px;
`;

export const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

export const Player = styled.div`
  font-size: 14px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 28px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 28px;
    padding: 0px 22px;
    font-size: 10px;
    margin: 0px 10px 0px 0px;
  }
`;

export const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

export const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2){
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

export const GroupWatch = styled.div`
height: 44px;
width: 44px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background: white;

div{
  height: 40px;
  width: 40px;
  background: rgb(0,0,0);
  border-radius: 50%;
  img{
    width: 100%;
  }
}
`;

export const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;

@media (max-width: 768px) {
  font-size: 12px;
}
`;

export const Description = styled.div`
line-height: 1.4;
font-size:20px;
padding: 16px 0px;
color: rgb(249,249,249);

@media (max-width: 768px) {
  font-size: 14px;
}
`;
//export const = styled.``;
