import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Container = styled.div`
  display: grid;
  margin 2vh 7vw 0 7vw;
  height:auto;
  border: 2px dotted black;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
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

export const BlockLogoTitle = styled.div`
  margin: 0.5vw 1vw 1vw 1vw;
`;

export const Title = styled.h2`
  opacity: 0;
  font-size: 2rem;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const LogoProjet = styled.img`
  background-color: white;
  border-radius: 10px;
`;

export const BlockUl = styled.div`
  opacity: 0;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  text-align: start;
  line-height: 2.5vh;
`;
export const ContainerUl1 = styled.div`
  display: flex;
  align-items: center;
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

export const OutilsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Center = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Tools = styled.li`
  list-style-type: disc;
  margin-left:1vw;
  margin-top:1vh;
`

export const Description = styled.p`
  opacity: 0;
  font-size: 1rem;
  line-height: 2.5vh;
  @media ${Device.mobile} {
    opacity: 1;
  }
`;

export const LiList = styled.li`
  margin-bottom: 1vh;
`
export const ContainerBlock = styled.div``

export const Grid1 = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  height: 22vh;
  background-color: #1f89d1;
  transition: 0.2s ease;
  overflow: hidden;
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

export const Grid4 = styled.div`
  grid-column-start: 4;
  grid-row-start: 2;
  height: 22vh;
  background-color: #1f89d1;
  transition: 0.2s ease;
  &:hover {
    background: #e5e5e5;

    grid-column: 3/6;
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

export const Test = styled.ul`
  margin: 0 2vw 0 2vw;
`

export const Details2 = styled.p`
  opacity: 0;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size:1.4rem;
`