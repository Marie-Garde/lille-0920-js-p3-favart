import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Body = styled.div`
  color: #e5e5e5;
  font-family: "Roboto", sans-serif;
`;

export const H1Left = styled.h1`
  color: #122239;
  margin: 5vh 0 1vh 7vw;
  font-size: 3rem;

  @media ${Device.mobile} {
    text-align: center;
    font-size: 2.3rem;
    margin: 5vh 0 3vh 0;
    text-decoration: underline;
  }
`;

export const ContainerWhy = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 7vw 0 7vw;
  justify-content: center;
  text-align: justify;
  align-items: center;

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const PWhy = styled.p`
  padding-left: 3vw;
  font-size: 1.2rem;
  color: black;

  @media ${Device.mobile} {
    text-align: justify;
    padding-left: 0;
  }
`;

export const ImgWhy = styled.img`
  width: 50vh;
  height: 20vw;
  border-radius: 15px;

  @media ${Device.mobile} {
    width: 90vw;
    height: 40vh;
  }
`;

export const H2Title = styled.h2`
  color: #122239;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 8vh;
`;

export const PTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 2vh 7vw 8vh 7vw;
  color: black;
`;

export const H1Right = styled.h1`
  color: #122239;
  display: flex;
  justify-content: flex-end;
  margin: 0 7vw 1vh 0;
  font-size: 3rem;

  @media ${Device.mobile} {
    text-align: center;
    font-size: 2.3rem;
    margin: 0 0 1vh 0;
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
`;

export const ContainerWhom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: justify;
  align-items: center;
  margin: 0 7vw 0 7vw;

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImgWhom = styled.img`
  width: 60vh;
  height: 20vw;
  border-radius: 15px;

  @media ${Device.mobile} {
    width: 90vw;
    height: 40vh;
  }
`;

export const PWhom = styled.p`
  padding-right: 50px;
  font-size: 1.2rem;
  color: black;

  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

export const PMap = styled.p`
  color: black;
  margin: 2vh 7vw 1vh 7vw;
  font-size: 1.2rem;
  text-align: justify;

  @media ${Device.mobile} {
  }
`;

export const Map = styled.div`
  text-align: center;
  margin: 5vh 0 5vh 0;

  @media ${Device.mobile} {
    display: none;
  }
`;
