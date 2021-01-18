import styled from "styled-components";
import { Device } from "../../assets/Device/Device.jsx";

export const Page = styled.div`
  background-color: #e5e5e5;
  height: 86vh;
`;

export const BlockTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  max-width: 85vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  @media ${Device.mobile} {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: 17vh;
  color: black;
  text-transform: uppercase;
  font-family: "Josefin Sans";
`;

export const TitleSpan = styled.span`
  font-size: 15vh;
  color: #1f89d1;
  text-transform: uppercase;
`;

export const BlockSentence = styled.div`
  margin-left: 8vw;

  @media ${Device.mobile} {
    margin-top: 1.5vh;
  }
`;

export const ContainerAuthorSentence = styled.div`
  max-width: 85vw;
  font-family: "Noto Sans CJK JP";
  line-height: 3em;
  @media ${Device.mobile} {
    display: inline;
    text-align: center;
    line-height: 1.2em;
  }
`;
export const AuthorSentence = styled.p`
  font-size: 4vh;
  font-style: italic;
  color: black;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    font-size: 2vh;
  }
`;
export const BlockButton = styled.div`
  background-color: red;
`;

export const ContainerMoreInformation = styled.button`
  cursor: pointer;
  position: absolute;
  margin: 0 40vw;
  bottom: 0;
  height: 8vh;
  border: 0px;
  width: 20vw;
  border-radius: 20px 20px 0 0;
  background-color: #1f89d1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ visible }) => visible && `display: none;`}

  @media ${Device.mobile} {
    display: none;
  }
`;

export const MoreInformationSentence = styled.p`
  color: white;
  font-size: 1.5rem;
  font-family: "Noto Sans CJK JP";
`;
