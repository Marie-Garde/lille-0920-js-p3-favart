import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Page = styled.div`
  background-color: #e5e5e5;
  border: 2px solid red;
`;

export const FirstTitle = styled.p`
  margin: 11.5vh 7vw 14vh 7vw;
  font-size: 3rem;
  text-align: center;
  @media ${Device.mobile} {
    font-size: 1.5rem;
    margin-bottom: 14vh;
  }
`;

export const Container = styled.div`
  border: 2px solid green;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin: 1vh 0vw 5vh 0vw;
  background-color: #e5e5e5;
  gap: 5vh;
  overflow: hidden;

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 100vw;
  } ;
`;

export const BlockLogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TitleProject = styled.h2`
  color: white;
  font-weight: bold;
  overflow: hidden;
  font-size: 3.5rem;
  visibility: hidden;
  @media ${Device.mobile} {
    display: flex;
    font-size: 2rem;
    margin-top: 2vh;
    visibility: visible;
  }
`;
export const ContainerLogo = styled.div`
  height: 20vh;
  width: 20vw;
  background-image: url(${({ bk }) => bk});
  background-size: contain;
  background-repeat: no-repeat;
  align-items: center;
`;

export const LogoProjet = styled.img`
  display: flex;
  width: 18vw;
  overflow: hidden;

  @media ${Device.mobile} {
    width: 40vw;
  }
`;

export const BlockUl = styled.div`
  opacity: 0;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  text-align: start;
  line-height: 2.5vh;
  @media ${Device.mobile} {
    opacity: 1;
    line-height: 2.5vh;
  }
`;
export const ContainerUl1 = styled.div`
  display: flex;
  align-items: center;
  @media ${Device.mobile} {
    text-align: justify;
    margin-left: 7vw;
    margin-right: 7vw;
  }
`;

export const OutilsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Center = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${Device.mobile} {
    margin-left: 10vw;
  }
`;

export const Tools = styled.li``;

export const LiList = styled.li`
  margin-bottom: 1vh;
  @media ${Device.mobile} {
    margin-bottom: 3vh;
    line-height: 2.5vh;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
`;

export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  border: 2px solid red;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 18vw;
  overflow: hidden;

  &:hover {
    display: flex;
    background-color: #0d253f;
    color: white;
    height: auto;
    width: 80vw;
    z-index: 1;
  }
  ${TitleProject} {
    visibility: visible;
  }
  ${LogoProjet} {
    visibility: visible;
  }

  ${ContainerLogo} {
  }
  ${BlockLogoTitle} {
    display: flex;
    justify-content: space-;
    align-items: center;
    opacity: 1;
  }
  ${BlockUl} {
    opacity: 1;
  }
  ${ContainerBlock} {
    opacity: 1;
  }

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #0d253f;
    color: white;
    height: auto;
    width: auto;
  } ;
`;

export const Test = styled.ul`
  margin: 0 2vw 0 2vw;
`;
export const BlockLogoTitle2 = styled.div`
  margin: 1.5vh 1.5vw 4vh 1.5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media ${Device.mobile} {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
