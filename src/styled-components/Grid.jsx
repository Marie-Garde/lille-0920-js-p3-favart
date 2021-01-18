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
export const Title = styled.h2`
  font-size: 1.5rem;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;
export const Details1 = styled.div`
  opacity: 0;
  @media ${Device.mobile} {
    opacity: 1;
  }
`;

export const LogoProjet = styled.img``;

export const Grid1 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  background: red;
  color: white;
  text-align: center;
  transition: 0.2s ease;
  &:hover {
    grid-column: 1/4;
    grid-row: 1/3;
    z-index: 1;
    transition: 0.2s ease;
    ${Details1} {
      opacity: 1;
      transition: opacity 0.3s ease;
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
