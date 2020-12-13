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
  font-size: 2rem;
  padding: 1vw;
  color: #3f66a9;
`;
export const IconLiTwit = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 2rem;
  padding: 1vw;
  color: #00c7ff;
`;

export const IconLiLin = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 2rem;
  padding: 1vw;
  color: #2796cf;
`;
export const IconLi = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 2rem;
  padding: 1vw;
  color: #2796cf;
`;
export const Hoot = styled.img`
  height: 3vh;
  width: 1.8vw;
`;
export const IconLiMail = styled.li`
  display: inline;
  text-decoration: none;
  font-size: 2rem;
  padding: 1vw;
  color: #4b87c8;
`;

export const ContainerConnexion = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
`;

//Nav2

export const ContainerNav2 = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-right: 4vw;
`;

export const Nav2Img = styled.img`
  height: 10vh;
  width: 100%;
  position: relative;
  border: 2px solid black;
`;

export const ContainerNav2Link = styled.div`
  margin-left: 4vw;
  position: absolute;
`;

export const NavLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
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
  color: black;
  text-transform: uppercase;
  margin-left: 18%;
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
  margin-left: 30%;
`;
export const Citation = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 4vh;
  font-style: italic;
  color: black;
  margin: 0;
`;

//More informations

export const ContainerInformation = styled.div`
  margin: 6% 0 0 35%;
  border: 2px solid #1f89d1;
  height: 10vh;
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
