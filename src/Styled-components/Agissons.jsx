import styled from "styled-components";
import { device } from "../Assets/Device/Device";

export const Card = styled.div`
  background-color: red;
  width: 50vw;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
  margin-left: 5vh;
`;

export const CardText = styled.div`
  width: 30vw;
  margin-right: 20vw;
`;

export const Title = styled.h1`
  font-size: 1.4;
`;

export const Text = styled.h2`
  font-size: 1.3;
`;

export const Liste = styled.ul`
  font-size: 1.4;
`;

export const CardImg = styled.img`
  width: 30vw;
  margin-left: -10vw;
`;
