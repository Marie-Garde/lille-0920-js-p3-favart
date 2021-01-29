import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Container = styled.div`
// border: 2px solid green;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
// width: 100%;
// height: 100vh;
// margin: 1vh 0vw 5vh 0vw;
// background-color: #e5e5e5;
// gap: 5vh;

`

export const FlexLogoTitle = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    // width: 40vw;
    // height: 100vh;

`

export const Img = styled.img`
// background-image: url(${({ bk }) => bk});
// background-repeat: no-repeat;
// border: 2px solid brown;

width: 100%;
height: 100%;
margin: auto;
`

export const Title = styled.div`
visibility:hidden;
// font-size:2rem;
// margin-right: 3vw;
`

export const FlexContainer = styled.div`
// border: 2px solid blue;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;
width: 28.5vw;
height: 18vw;
border: 2px solid red;
margin:2vw;
`

export const FlexText = styled.div`
overflow: hidden;
display:none;
`;