import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const FlexBox = styled.div`
  display: flex;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;

export const FlexBox1 = styled.div`
  flex: 1;
  width : 25%;
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 150vh;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const FlexBox2 = styled.div`
width: 75%;
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  padding-top: 15vh;
`;

export const DivCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 50vh;
  width : 40%;
`;

export const H1 = styled.h1`
font-size : 1.7rem;
padding-top : 2vh;
padding-left : 2vh;
`;

export const P = styled.p`
font-size : 1.2rem;
padding-top : 4vh;
padding-left : 2vh;
`;

export const Img = styled.img`
width : 100%`;