import styled from "styled-components";

export const FooterMain = styled.footer`
  display: flex;
  background-color: #0d253f;
  color: white;
  padding: 0.5%;
`;
// Contact us div
export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding-left: 5%;
`;
export const FirstUl = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Space = styled.hr`
  background-color: #008bd0;
  color: #008bd0;
  height: 0.5vh;
  margin: 0;
  width: 35%;
`;

export const Img = styled.img`
  padding-right: 1vw;
`;

export const UlIcons = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const EndFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// map container div
export const MapContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 65%;
`;

export const MyFrame = styled.iframe`
  width: 75%;
  height: 90%;
  padding-right: 3%;
  border: 0;
`;
