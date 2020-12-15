import styled from "styled-components";
import { device } from "../Assets/Device";

export const Body = styled.div`
  color: #e5e5e5;
  font-family: "Roboto", sans-serif;
`;

export const TitleR = styled.h1`
  color: #122239;
  margin: 5vh 0 1vh 7vw;

  @media ${device.smallDevices} {
    text-align: center;
    font-size: 2.3rem;
    margin: 5vh 0 3vh 0;
    text-decoration: underline;
  }
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 7vw 0 7vw;
  justify-content: center;
  text-align: justify;
  align-items: center;

  @media ${device.smallDevices} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Text1 = styled.p`
  padding-left: 3vw;
  font-size: 1.2rem;
  color: black;

  @media ${device.smallDevices} {
    text-align: justify;
    padding-left: 0;
  }
`;

export const Img1 = styled.img`
  width: 50vh;
  height: 20vw;
  border-radius: 15px;

  @media ${device.smallDevices} {
    width: 90vw;
    height: 40vh;
  }
`;

export const SubTitle = styled.h2`
  color: #122239;
  text-align: center;
  font-size: 2em;
  margin-top: 8vh;
`;

export const TextTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 2vh 7vw 8vh 7vw;
  color: black;
`;

export const TitleL = styled.h1`
  color: #122239;
  display: flex;
  justify-content: flex-end;
  margin: 0 7vw 1vh 0;
  font-size: 2rem;

  @media ${device.smallDevices} {
    text-align: center;
    font-size: 2.3rem;
    margin: 0 0 1vh 0;
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: justify;
  align-items: center;
  margin: 0 7vw 0 7vw;

  @media ${device.smallDevices} {
    display: flex;
    flex-direction: column;
  }
`;

export const Img2 = styled.img`
  width: 60vh;
  height: 20vw;
  border-radius: 15px;

  @media ${device.smallDevices} {
      width: 90vw;
      height: 40vh;
  }
`;

export const Text2 = styled.p`
  padding-right: 50px;
  font-size: 1.2rem;
  color: black;

  @media ${device.smallDevices} {
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

export const TextMap = styled.p`
  color: black;
  margin: 2vh 7vw 1vh 7vw;
  font-size: 1.2rem;
  text-align: justify;

  @media ${device.smallDevices}{
  }
`;

export const Map = styled.a`
  display: flex;
  justify-content: center;
  margin: 5vh 0 5vh 0;

  @media ${device.smallDevices} {
    display: none;
  }
`;
