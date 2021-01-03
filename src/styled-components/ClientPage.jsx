import styled from "styled-components";
import { Device } from "../components/Device";

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexBox1 = styled.div`
  flex: 1;
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 100vh;
`;

export const Text = styled.div`
  margin-top: 40vh;
`;

export const Name = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 2vh;
`;

export const Function = styled.h2`
  color: white;
  font-size: 1.6rem;
  text-align: center;
  padding-bottom: 2vh;
`;

export const Company = styled.h2`
  color: white;
  font-size: 1.8rem;
  text-align: center;
`;

export const FlexBox2 = styled.div`
  flex: 2;
  height: 100vh;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 8vh;
`;

export const Ressources = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3vh;
  color: #122239;
  text-decoration: underline;
`;

export const RessourcesFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TextRessources = styled.h1`
  flex: 2;
  padding-right: 3vw;
  color: #122239;
`;

export const RessourcesImg = styled.img`
  flex: 1;
  height: 20vh;
`;

export const Agir = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3vh;
  margin-top: 8vh;
  color: #122239;
  text-decoration: underline;
`;

export const AgirFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TextAgir = styled.h1`
  flex: 2;
  padding-left: 3vw;
  color: #122239;
`;

export const AgirImg = styled.img`
  flex: 1;
  height: 20vh;
`;

export const Flash = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3vh;
  margin-top: 8vh;
  color: #122239;
  text-decoration: underline;
`;

export const TextFlash = styled.h1`
  flex: 2;
  padding-right: 3vw;
  color: #122239;
`;
