import styled from "styled-components";

//Logo, network-link, connexion

export const DivHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  height: 15vh;
  width: 25vw;
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

export const ContainerConnexion = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-family: "Roboto", sans-serif;
`;

//Nav2

export const ContainerNav2 = styled.div`
  display: flex;
  height: 15vh;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5%;
`;

export const Nav2Img = styled.img`
  height: 15vh;
  width: 100%;
  position: relative;
  border: 2px solid black;
`;

export const ContainerNav2Link = styled.div`
  margin-left: 5vw;
  position: absolute;
`;

export const NavLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  color: #0e273d;
  text-decoration: none;
`;

//Title1

export const ContainerTitle1 = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 11vh;
  width: 50%;
  color: black;
  text-transform: uppercase;
  margin-bottom: 4%;
`;

export const Span1 = styled.span`
  font-size: 10vh;
  color: #1f89d1;
  text-transform: uppercase;
`;

//Citation

export const ContainerCitation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50%;
`;
export const Citation = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 4vh;
  font-style: italic;
  color: black;
`;

//More informations

export const ContainerInformation = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 13vh;
  border: 2px solid #1f89d1;
  height: 8vh;
  width: 20vw;
  border-radius: 200px 200px 0 0;
  background-color: #1f89d1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Information = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2vh;
`;
