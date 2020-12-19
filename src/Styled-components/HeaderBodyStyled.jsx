import styled from "styled-components";

//Title

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 11vh;
  width: 50%;
  color: black;
  text-transform: uppercase;
  margin-bottom: 4%;
`;

export const TitleSpan = styled.span`
  font-size: 10vh;
  color: #1f89d1;
  text-transform: uppercase;
`;

//Author quote

export const ContainerAuthorSentence = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50%;
`;
export const AuthorSentence = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 4vh;
  font-style: italic;
  color: black;
`;

//More informations

export const ContainerMoreInformation = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 13vh;
  border: 2px solid #1f89d1;
  height: 8vh;
  width: 20vw;
  border-radius: 200px 200px 0 0;
  background-color: #1f89d1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreInformationSentence = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2vh;
`;
