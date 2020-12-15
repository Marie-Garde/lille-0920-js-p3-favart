import styled from "styled-components";

export const Background = styled.div`
  background-color: #a2abb2;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInscription = styled.div`
  background: rgb(255, 245, 230);
  background: linear-gradient(
    180deg,
    rgba(255, 245, 230, 1) 0%,
    rgba(35, 134, 201, 1) 100%
  );
  box-shadow: 4px 10px 16px 0px rgba(97, 97, 97, 1);
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2vw;
  padding-right: 2vw;
`;

export const ContainerForm = styled.div`
  background-color: #ffff;
  height: 85vh;
  width: 50vw;
  box-shadow: 4px 10px 16px 0px rgba(97, 97, 97, 1);
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
`;

export const Logo = styled.img`
  width: 12vw;
`;

export const Slogan = styled.h1`
  font-size: 2em;
  text-align: center;
  padding-right: 5vw;
  padding-left: 5vw;
  font-weight: bold;
`;

export const Span = styled.span`
  color: white;
`;
