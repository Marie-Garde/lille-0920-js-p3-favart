import styled from "styled-components";
import { Device } from "../../assets/Device/Device.jsx";

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  @media ${Device.mobile} {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: 10vh;
  width: 50vw;
  color: black;
  text-transform: uppercase;
  margin-bottom: 5vh;
`;

export const TitleSpan = styled.span`
  font-size: 10vh;
  color: #1f89d1;
  text-transform: uppercase;
`;

export const ContainerAuthorSentence = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50vw;
  @media ${Device.mobile} {
    flex-direction: raw;
    align-items: center;
    justify-content: center;
    margin: 4vh 0vw 0vh 0vw;
  }
`;
export const AuthorSentence = styled.p`
  font-size: 4vh;
  font-style: italic;
  color: black;
  @media ${Device.mobile} {
    font-size: 2.5vh;
    padding: 0.5vh;
  }
`;


export const ContainerMoreInformation = styled.button`
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  margin-top: 19vh;
  border: 2px solid #1f89d1;
  height: 8vh;
  width: 20vw;
  border-radius: 200px 200px 0 0;
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
`;
