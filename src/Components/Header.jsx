import React from "react";
import logo from "../Assets/logo-icon-header/FAVART.jpg";
import placeholder from "../Assets/nav2/diago.jpg";

import {
  ContainerNav2,
  ContainerNav2Link,
  Nav2Img,
  NavLink,
  ContainerTitle1,
  Title1,
  Span1,
  ContainerCitation,
  Citation,
  ContainerInformation,
  Information,
} from "../Styled-components/HeaderStyled.jsx";

export default function Header() {
  return (
    <>
      <>
        <ContainerNav2>
          <Nav2Img src={placeholder} alt="reunion" />
          <ContainerNav2Link>
            <NavLink href="">01 </NavLink>
            <NavLink href="">/ 02 /</NavLink>
            <NavLink href=""> 03 </NavLink>
            <NavLink href="">/ 04</NavLink>
          </ContainerNav2Link>
        </ContainerNav2>
      </>
      <ContainerTitle1>
        <Title1>
          pourquoi nous <Span1>existons</Span1>?
        </Title1>
      </ContainerTitle1>
      <ContainerCitation>
        <Citation>"Atteindre le plus grand nombre en mettant la</Citation>
        <Citation> barre très haut" Agnès Varda</Citation>
      </ContainerCitation>
      <>
        <ContainerInformation>
          <Information>Plus d'informations</Information>
        </ContainerInformation>
      </>
    </>
  );
}
