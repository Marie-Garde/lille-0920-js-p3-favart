import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`

export const FlexLogoTitle = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;

`

export const Img = styled.img`
width: 100%;
height: 100%;
margin: auto;
`

export const Title = styled.div`
visibility:hidden;
`

export const FlexContainer = styled.div`
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
`;

export const Span = styled.span`
    font-weight:bold;
    text-decoration:underline;
`

export const Ul = styled.ul`
    list-style-type: none;
`

export const ContainersM = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height:100vh;
`

export const Button = styled.button`
    min-width:100px;
    padding: 16px 32px;
    border:none;
    background: #141414;
    font-size:16px;
    cursor: pointer;
    color:white;
`
