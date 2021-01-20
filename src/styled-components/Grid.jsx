import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Container = styled.div`
  display: grid;
  gap: 40px 30px;
  margin: 10vh 0vw 5vh 0vw;
  height: auto;
  background-color: #e5e5e5;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1vw;
  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    height: 125vh;
    width: 100vw;
  } ;
`;

export const BlockLogoTitle = styled.div`
  margin: 1.5vh 1.5vw 4vh 1.5vw;

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.h2`
  color: #0d253f;
  font-weight: bold;
  overflow: hidden;
  font-size: 3.5rem;
  padding: 1vh 0vw;
  @media ${Device.mobile} {
    display: flex;
    font-size: 2rem;
    margin-top: 2vh;
  }
`;

export const LogoProjet = styled.img`
  background-color: white;
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

export const Tools = styled.li`
  list-style-type: disc;
  margin-left: 1vw;
  margin-top: 1vh;
`;

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
`;

export const Grid1 = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  height: 22vh;
  background-color: #1f89d1;
  overflow: hidden;
  width: 20vw;
  &:hover {
    background: grey;
    color: white;
    grid-column: 1/4;
    grid-row: 1/3;
    height: auto;
    width: auto;
    z-index: 1;
  }
  ${Title} {
    opacity: 1;
  }
  ${BlockLogoTitle} {
    display: flex;
    justify-content: space-around;
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
    background: grey;
    color: white;
    height: 200vh;
    width: auto;
  } ;
`;

export const Test = styled.ul`
  margin: 0 2vw 0 2vw;
`;

export const Details2 = styled.p`
  opacity: 0;
`;
export const Grid2 = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  height: 22vh;
  background-color: #1f89d1;
  transition: 0.2s ease;
  overflow: hidden;
  &:hover {
    background: #e5e5e5;

    grid-column: 3/6;
    grid-row: 1/3;
    height: auto;
    z-index: 1;
    transition: 0.2s ease;

    ${Title} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    ${BlockLogoTitle} {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    ${BlockUl} {
      opacity: 1;
    }
    ${ContainerBlock} {
      opacity: 1;
    }
  }
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Grid3 = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  height: 22vh;
  background-color: #1f89d1;
  transition: 0.2s ease;
  overflow: hidden;
  &:hover {
    background: #e5e5e5;
    grid-column: 1/4;
    grid-row: 2/6;
    height: auto;
    z-index: 1;
    transition: 0.2s ease;

    ${Title} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    ${BlockLogoTitle} {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    ${BlockUl} {
      opacity: 1;
    }
    ${ContainerBlock} {
      opacity: 1;
    }
  }
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Grid4 = styled.div`
  grid-column: 4/5;
  grid-row: 2/3;
  height: 22vh;
  background-color: #1f89d1;
  transition: 0.2s ease;
  &:hover {
    background: #e5e5e5;

    grid-column: 3/6;
    grid-row: 2/6;
    height: auto;
    z-index: 1;
    transition: 0.2s ease;

    ${Title} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    ${BlockLogoTitle} {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    ${BlockUl} {
      opacity: 1;
    }
    ${ContainerBlock} {
      opacity: 1;
    }
  }
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
