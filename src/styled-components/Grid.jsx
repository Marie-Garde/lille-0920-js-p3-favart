import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Container = styled.div`
  display: grid;
  margin: 3vh 7vw 3vh 7vw;
  border: 2px dotted black;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
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
  font-size: 2rem;
  margin-bottom:2vh;
  text-transform: uppercase;
  transition: ease 2s;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const LogoProjet = styled.img`
  margin: 1vh 1vw 1vh 1vw;
  background-color: white;
  transition: ease 2s;
`;

export const BlockUl = styled.div`
  opacity: 0;
  margin: 7vh 7vw 10vh 7vw;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  line-height:140%;
  font-size:1.3rem;
  transition: ease 2s;
`;

export const BlockDescription = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  transition: ease 2s;
`;

export const Description = styled.p`
  opacity: 0;
  margin-bottom: 5vh;
  transition: ease 2s;
  @media ${Device.mobile} {
    opacity: 1;
  }
`;
export const ContainerBlock = styled.div``;

export const Grid1 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  height: 22vh;
  background: #e5e5e5;
  color: black;
  text-align: center;
  transition: 0.2s ease;
  border-radius: 5px;
  height:22.5vh;
  

  &:hover {

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

export const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Head = styled.div`
display: flex;
flex-direction: row;
`;

export const ProjectTitle = styled.h1`
  align-items:center;
  display:flex;
  margin-left:25%
`

export const Test = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: start;
  margin: 1vh 4vw 2vh 4vw;
  line-height:150%
`;

export const List = styled.ul`

`


