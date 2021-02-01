import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Img = styled.img`
  height: auto;
  width: 100%;
  @media ${Device.mobile} {
    margin-left: 60vw;
    height: 15vh;
    width: 50vw;
  }
`;

export const Testing = styled.div`
  height: 60vh;
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  @media ${Device.mobile} {
    height: 30vh;
    padding-bottom: 8vh;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-left: 6vw;
  margin-top: 5vh;
  @media ${Device.mobile} {
    font-size: 1.5rem;
    text-align: start;
    padding-bottom: 3vh;
  }
`;

export const Margin = styled.div`
  margin: 0 6vw 0 6vw;
`;
