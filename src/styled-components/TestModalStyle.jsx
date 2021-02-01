import { Device } from "../assets/Device/Device";
import styled from "styled-components";

    export const PictureContent = styled.div`
  position: relative;
  top: -20vh;
  left: 25vw;
  height: auto;
  max-height: 59vh;
  &.hide {
    display: none;
    height: auto;
  }
  @media ${Device.mobile} {
    top: 0;
    left: 0;
    height: auto;
    max-height: 110vh;
  }
`;

export const Picture = styled.img`
  height: 25vh;
  width: auto;
  @media ${Device.mobile} {
    height: 20vh;
    width: 60vw;
  }
`;
export const Button = styled.button`
  height: 20vh;
  width: 20vw;
  cursor: pointer;

  @media ${Device.mobile} {
    width: 50vw;
    margin-left: 20vw;
  }
`;

export const Flex = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 3vh;
  margin: 10vh 6vw 0 6vw;

  h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }

  @media ${Device.mobile} {
    height: auto;
  }
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

export const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3vh 3vw 5vh 3vw;

  h1 {
    color: #fff;
    font-size: 2.5rem;
  }
  @media ${Device.mobile} {
    flex-direction: column;
    h1 {
      color: #fff;
      font-size: 2rem;
      margin-top: 2vh;
    }
  }
`;

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  background-color: #122239;
  width: 60vw;
  @media ${Device.mobile} {
    width: auto;
  }
`;

export const Content = styled.div`
  margin: 0 3vw 3vh 3vw;
  color: #fff;
  @media ${Device.mobile} {
    p {
      line-height: 1.2em;
    }
  }
`;

export const Image = styled.img`
  max-height: 15vh;
  max-width: 18vw;
  @media ${Device.mobile} {
    max-height: 25vh;
    max-width: 25vw;
  }
`;

export const Title = styled.h1`
  margin-bottom: 6vh;
  @media ${Device.mobile} {
    margin-bottom: 4vh;
  }
`;
