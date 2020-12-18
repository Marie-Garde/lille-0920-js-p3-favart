import React from "react";
import logo from "../Assets/logo-icon-header/FAVART.jpg";
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
} from "../Styled-components/HeaderTopStyled.jsx";

export default function HeaderTop() {
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
    </>
  );
}
