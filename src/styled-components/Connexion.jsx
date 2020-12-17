import styled from "styled-components";
import { Device } from "../components/Device";

export const Background = styled.div`
  background-color: #a2abb2;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInscription = styled.div`
  background: #85a7bd;

  box-shadow: 4px 10px 16px 0px rgba(97, 97, 97, 1);
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2vw;
  padding-right: 2vw;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;

export const ContainerForm = styled.div`
  background-color: #ffff;
  height: 85vh;
  width: 50vw;
  box-shadow: 4px 10px 16px 0px rgba(97, 97, 97, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${Device.mobile} {
    width: 80vw;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
`;

export const Logo = styled.img`
  width: 12vw;
  @media ${Device.mobile} {
    width: 30vw;
  }
`;

export const Slogan = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding-right: 5vw;
  padding-left: 5vw;
  font-weight: bold;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Span = styled.span`
  color: white;
`;
export const TitleForm = styled.h1`
  font-size: 2.5rem;
  @media ${Device.mobile} {
    font-size: 1.6rem;
  }
`;

export const H2 = styled.h2`
  font-size: 0.8rem;
`;
