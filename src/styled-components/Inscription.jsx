import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const FlexBox = styled.div`
  display: flex;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;

export const FlexBox1 = styled.div`
  flex: 1;
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 100vh;
  @media ${Device.mobile} {
    flex-direction: column;
    height: 5vh;
  }
`;

export const FlexBox2 = styled.div`
  flex: 2;
  height: 100vh;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 8vh;
`;

export const P = styled.h1`
  font-size: 1.5rem;
  font-family: "Josefin Sans";
`;

export const Formulaire = styled.form`
  width: 65vw;
  margin-top: 8vh;
  margin-right: 2vw;
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  @media ${Device.mobile} {
    height: 40vh;
    width: 40vh;
    margin-right: 35vw;
  }
`;

export const DivLabel = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 6vh;
  width: 100%;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const DivTheme = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
  width: 100%;
  text-align: start;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const Label = styled.label`
  color: black;
  margin-bottom: 0.5vw;
  width: 30%;
  font-family: "Noto Sans CJK JP";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Input = styled.input`
  width: 50%;
  text-align: center;
  font-family: "Noto Sans CJK JP";
  @media ${Device.mobile} {
    width: 70vw;
  }
`;

export const Textarea = styled.textarea`
  width: 71.5%;
  height: 25vh;
  text-align: center;
  font-family: "Noto Sans CJK JP";
  @media ${Device.mobile} {
    width: 70vw;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  font-family: "Noto Sans CJK JP";
`;

export const StyledButton = styled.input`
  padding: 0 20px;
  border: none;
  background: #370d53;
  color: #c4c1c7;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  height: 4vh;
  border-radius: 5px;
  margin-top: 10vh;
  &:hover {
    background: #51218f;
    color: #d7d0db;
    cursor: pointer;
  }
  @media ${Device.mobile} {
    margin-top: 10vh;
    margin-left: 15vw;
  }
`;
