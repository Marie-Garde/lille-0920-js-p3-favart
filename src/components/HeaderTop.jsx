import React from "react";
import logo from "../Assets/logo-icon-header/FAVART.jpg";
import twitter from "../Assets/logo-icon-header/twitter.svg";
import linkedin from "../Assets/logo-icon-header/linkedin.svg";
import mail from "../Assets/logo-icon-header/mail.svg";
import connect from "../Assets/logo-icon-header/connect.svg";
import { Link } from "react-router-dom";

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
} from "../Styled-components/HeaderTopStyled.jsx";

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
          <ConnexionSentence to="/connexion">
            Connexion / Inscription
          </ConnexionSentence>
        </ContainerConnexionSentence>
        <ContainerIconConnexion to="/connexion">
          <IconConnexion src={connect} alt="logo connexion" />
        </ContainerIconConnexion>
      </DivHeaderTop>
    </>
  );
}
