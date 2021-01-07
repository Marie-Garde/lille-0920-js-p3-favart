import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import { Link } from "react-router-dom";

export const DivHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${Device.mobile} {
    justify-content: center;
  }
`;

export const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${Device.mobile} {
    margin-right: 15vw;
    margin-left: 20vw;
  }
`;

export const Logo = styled.img`
  height: 15vh;
  width: 25vw;
  @media ${Device.mobile} {
    height: 15vh;
    width: 45vw;
  }
`;
export const ContainerIcon = styled.div`
  @media ${Device.mobile} {
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

export const ContainerIconConnexion = styled(Link)`
  display: none;
  @media ${Device.mobile} {
    display: flex;
  }
`;

export const IconConnexion = styled.img`
  @media ${Device.mobile} {
    width: 8vw;
  }
`;

export const ContainerConnexionSentence = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const ConnexionSentence = styled(Link)`
  font-size: 2.5rem;
`;
