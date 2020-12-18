import React from "react";
import logo from "../Assets/logo-icon-header/FAVART.jpg";
import placeholder from "../Assets/nav2/diago.jpg";
import twitter from "../Assets/logo-icon-header/twitter.svg";
import linkedin from "../Assets/logo-icon-header/linkedin.svg";
import mail from "../Assets/logo-icon-header/mail.svg";

import {
  DivHeaderTop,
  Logo,
  ContainerLogo,
  IconTwitter,
  IconLinkedin,
  IconMail,
  ContainerConnexion,
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
      <DivHeaderTop>
        <ContainerLogo>
          <Logo src={logo} alt="logo favart" />
        </ContainerLogo>
        <div>
          <IconTwitter src={twitter} alt="logo twitter" />

          <IconLinkedin src={linkedin} alt="logo linkedin" />

          <IconMail src={mail} alt="logo mail" />
        </div>
        <ContainerConnexion>Connexion / Inscription</ContainerConnexion>
      </DivHeaderTop>
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
