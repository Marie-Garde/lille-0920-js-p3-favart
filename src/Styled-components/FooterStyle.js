import styled from "styled-components";
import {device} from "../Components/Device";

export const FooterMain = styled.footer`

  display: flex;
  background-color: #0d253f;
  color: white;
  padding: 0.5%;
`;
// Contact us div
export const DivContactUs = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding-left: 5%;
  @media ${device.mobile} {
        width: 100%;
        padding: 0%;
    }
`;
export const FirstUl = styled.ul`
  list-style: none;
  padding: 0;
  @media ${device.mobile} {
        display : none;
    }
`;
export const Hr = styled.hr`
  background-color: #008bd0;
  color: #008bd0;
  height: 0.5vh;
  margin: 0;
  width: 35%;
  @media ${device.mobile} {
        display : none;
    }
`;

export const H1 = styled.h1 `    
    @media ${device.mobile} {
    display : none;
    }
`;

export const Img = styled.img`
  padding-right: 1vw;
`;

export const UlIcons = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
    @media ${device.mobile} {
        width: 100%;
        justify-content: space-around;
    }
`;

export const DivEndFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${device.mobile} {
        width: 100%;
        justify-content: space-around;
    }
`;

// map container div
export const MapContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 65%;
  @media ${device.mobile} {
        display : none;
    };
`;

export const IFrame = styled.iframe`
  width: 75%;
  height: 90%;
  padding-right: 3%;
  border: 0;
`;
