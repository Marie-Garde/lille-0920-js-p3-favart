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
    height: auto;
    width: 50vw;
  } ;
`;

export const BlockLogoTitle = styled.div``;

export const Title = styled.h2`
  opacity: 0;
  font-size: 2.5rem;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const LogoProjet = styled.img`
  margin: 1.5vh;
  background-color: white;
`;

export const BlockUl = styled.div`
  opacity: 0;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  text-align: start;
  margin-top: 3vh;
  line-height: 2.5vh;
`;
export const ContainerUl1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Span1 = styled.p`
  display: inline-block;
  flex-wrap: wrap;
  margin-left: 10vw;
`;
export const ContainerUl2 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BlockDescription = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 5vh;
`;
export const Outils = styled.ul`
  list-style-type: circle;
  margin-left: 25vw;
`;

export const Description = styled.p`
  opacity: 0;
  font-size: 1rem;
  line-height: 2.5vh;
  @media ${Device.mobile} {
    opacity: 1;
  }
`;
export const ContainerBlock = styled.div``;

export const Grid1 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  height: 22vh;
  background-color: #1f89d1;
  color: black;
  text-align: center;
  transition: 0.2s ease;
  &:hover {
    background: #e5e5e5;

    grid-column: 1/4;
    grid-row: 1/3;
    height: auto;
    z-index: 1;
    transition: 0.2s ease;
    ${Description} {
      opacity: 1;
      transition: opacity 0.3s ease;
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
    ${BlockDescription} {
      opacity: 1;
    }
  }
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  opacity: 0;
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
