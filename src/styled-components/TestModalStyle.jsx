import { Device } from "../assets/Device/Device";
import styled from "styled-components";

export const PictureContent = styled.div`
  position: relative;
  top: -180px;
  left: 380px;
  height: 0px;
  &.hide {
    display: none;
  }
  @media ${Device.mobile} {
    top: 0;
    left: 0;
  }
`;

export const Picture = styled.img`
  height: 25vh;
  width: auto;
  @media ${Device.mobile} {
    height: 20vh;
    width: 60vw;
  }
`;
export const Button = styled.button`
  height: 20vh;
  width: 20vw;
  cursor: pointer;
  @media ${Device.mobile} {
    width: 50vw;
    margin-left: 20vw;
  }
`;

export const Flex = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 3vh;
  margin: 10vh 6vw 0 6vw;
  height: 200vh;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  @media ${Device.mobile} {
    height: 246vh;
  }
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2vh;
  text-decoration: underline;
`;

export const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3vh 3vw 5vh 3vw;

  h1 {
    color: #fff;
    font-size: 2.5rem;
  }
  @media ${Device.mobile} {
    flex-direction: column;
    h1 {
      color: #fff;
      font-size: 2rem;
    }
  }
`;

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  background-color: #122239;
  width: 60vw;
  @media ${Device.mobile} {
    width: auto;
  }
`;

export const Content = styled.div`
  margin: 0 3vw 3vh 3vw;
  color: #fff;
`;

export const Image = styled.img`
  max-height: 15vh;
  max-width: 20vw;
  @media ${Device.mobile} {
    max-height: 25vh;
    max-width: 25vw;
  }
`;

export const Title = styled.h1`
  margin-bottom: 6vh;
`;
