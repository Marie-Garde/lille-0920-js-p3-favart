import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Container = styled.div`
  display: grid;
  margin-left: 7vw;
  margin-right: 7vw;
  border: 2px dotted black;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1vw;

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    height: 125vh;
    width: 80vw;
  } ;
`;

export const BlockLogoTitle = styled.div`
  margin: 1vh 2vw 4vh 2vw;
  @media ${Device.mobile} {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  opacity: 0;
  font-size: 2rem;
  @media ${Device.mobile} {
    font-size: 1.5rem;
    opacity: 1;
    width: 70vw;
    margin-left: 10vw;
  }
`;

export const LogoProjet = styled.img`
  background-color: white;
  border-radius: 10px;
  @media ${Device.mobile} {
    width: 30vw;
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
    align-items: flex-start;
  }
`;

export const OutilsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Device.mobile} {
  } ;
`;

export const Center = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tools = styled.li`
  list-style-type: disc;
  margin-left: 1vw;
  margin-top: 1vh;
`;

export const LiList = styled.li`
  margin-bottom: 1vh;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
`;

export const ContainerBlock = styled.div``;

export const Grid1 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  height: 22vh;
  background-color: #1f89d1;
  overflow: hidden;
  &:hover {
    background: grey;
    color: white;
    grid-column: 1/4;
    grid-row: 1/3;
    height: auto;
    z-index: 1;
    transition: 0.2s ease;
  }
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

  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 200vh;
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
  background: green;
  color: white;
  text-align: center;
  &:hover {
    grid-column: 3/6;
    grid-row: 1/3;
    z-index: 1;
    ${Details2} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;
export const Details3 = styled.p`
  opacity: 0 BlockDescription;
`;

export const Grid3 = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  background: blue;
  color: white;
  text-align: center;
  &:hover {
    grid-column: 1/4;
    grid-row: 2/4;
    z-index: 1;
    ${Details3} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;

export const Details4 = styled.p`
  opacity: 0;
`;

export const Grid4 = styled.div`
  grid-column-start: 4;
  grid-row-start: 2;
  background: gray;
  color: white;
  text-align: center;
  &:hover {
    grid-column: 3/6;
    grid-row: 2/4;
    z-index: 1;

    ${Details4} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;
export const Details5 = styled.p`
  opacity: 0;
`;

export const Grid5 = styled.div`
  grid-column-start: 2;
  grid-row-start: 3;
  background: purple;
  color: white;
  text-align: center;
  &:hover {
    grid-column: 1/4;
    grid-row: 2/4;
    z-index: 1;
    ${Details5} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;

export const Details6 = styled.p`
  opacity: 0;
`;
export const Grid6 = styled.div`
  grid-column-start: 4;
  grid-row-start: 3;
  background: orange;
  color: white;
  text-align: center;
  &:hover {
    grid-column: 3/6;
    grid-row: 2/4;
    z-index: 1;
    ${Details6} {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;
