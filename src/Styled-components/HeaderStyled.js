import styled from "styled-components";

//Nav1

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  border-bottom: 10px solid #1f89d1;
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

export const ContainerUlLi = styled.div`
  display: inline;
`;

export const IconLiFb = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 3rem;
  padding: 1vw;
  color: #3f66a9;
`;
export const IconLiTwitter = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 3rem;
  padding: 1vw;
  color: #00c7ff;
`;

export const IconLiLinkedin = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 3rem;
  padding: 1vw;
  color: #2796cf;
`;

export const Hoot = styled.img`
  height: 4vh;
  width: 2vw;
`;
export const IconLiMail = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 3rem;
  padding: 1vw;
  color: #4b87c8;
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
  margin: 6% 0 0 35%;
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
