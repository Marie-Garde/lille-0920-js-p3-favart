import styled from "styled-components";
import { device } from "../Assets/Device/Device";

export const DivHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.smallDevices} {
    justify-content: center;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.smallDevices} {
    margin-right: 15vw;
    margin-left: 20vw;
  }
`;

export const Logo = styled.img`
  height: 15vh;
  width: 25vw;
  @media ${device.smallDevices} {
    height: 15vh;
    width: 45vw;
  }
`;
export const ContainerIcon = styled.div`
  @media ${device.smallDevices} {
    display: none;
  }
`;
export const IconTwitter = styled.img`
  width: 2.5vw;
`;
export const IconLinkedin = styled.img`
  width: 2.5vw;
  padding-left: 1vw;
  padding-right: 1vw;
`;

export const IconMail = styled.img`
  width: 2.5vw;
`;

export const ContainerIconConnexion = styled.div`
  display: none;
  @media ${device.smallDevices} {
    display: flex;
  }
`;

export const IconConnexion = styled.img`
  @media ${device.smallDevices} {
    width: 8vw;
  }
`;

export const ContainerConnexionSentence = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
  @media ${device.smallDevices} {
    display: none;
  }
`;

export const ConnexionSentence = styled.p`
  font-size: 2.5rem;
`;
