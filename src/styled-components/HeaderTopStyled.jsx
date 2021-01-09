import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const DivHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  @media ${Device.mobile} {
    justify-content: space-evenly;
    height: 10vh;
  }
`;

export const Logo = styled.img`
  height: 8vh;
  width: 15vw;
  @media ${Device.mobile} {
    height: 10vh;
    width: 40vw;
    margin-right: 20vw;
    margin-left: 25vw;
  }
`;
export const ContainerIcon = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  @media ${Device.mobile} {
    display: none;
  }
`;
export const IconTwitter = styled.img`
  width: 2vw;
`;
export const IconLinkedin = styled.img`
  width: 2vw;
  padding-left: 2vw;
  padding-right: 2vw;
`;

export const IconMail = styled.img`
  width: 2vw;
`;

export const ContainerIconConnexion = styled.div`
  display: none;
  @media ${Device.mobile} {
    display: flex;
  }
`;

export const IconConnexion = styled.img`
  @media ${Device.mobile} {
    width: 3vh;
  }
`;

export const ContainerConnexionSentence = styled.div`
  @media ${Device.mobile} {
    display: none;
  }
`;

export const ConnexionSentence = styled.p`
  font-size: 1.5rem;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;