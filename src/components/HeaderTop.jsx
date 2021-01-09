import React from "react";
import logo from "../assets/logo-icon-header/FAVART.jpg";
import twitter from "../assets/logo-icon-header/twitter.svg";
import linkedin from "../assets/logo-icon-header/linkedin.svg";
import mail from "../assets/logo-icon-header/mail.svg";
import connect from "../assets/logo-icon-header/connect.svg";

import {
  DivHeaderTop,
  Logo,
  ContainerIcon,
  IconTwitter,
  IconLinkedin,
  IconMail,
  ContainerIconConnexion,
  IconConnexion,
  ContainerConnexionSentence,
  ConnexionSentence,
} from "../styled-components/HeaderTopStyled.jsx";

export default function HeaderTop() {
  return (
    <>
      <DivHeaderTop>
        <Logo src={logo} alt="logo favart" />
        <ContainerIcon>
          <IconTwitter src={twitter} alt="logo twitter" />

          <IconLinkedin src={linkedin} alt="logo linkedin" />

          <IconMail src={mail} alt="logo mail" />
        </ContainerIcon>

        <ContainerConnexionSentence>
          <ConnexionSentence>Connexion / Inscription</ConnexionSentence>
        </ContainerConnexionSentence>
        <ContainerIconConnexion>
          <IconConnexion src={connect} alt="logo connexion" />
        </ContainerIconConnexion>
      </DivHeaderTop>
    </>
  );
}
