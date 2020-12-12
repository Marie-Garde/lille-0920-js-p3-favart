import React from "react";
import logo from "../Assets/FAVART.jpg";
import hoot from "../Assets/hooot.png";

import {
  ContainerNav,
  Logo,
  Hoot,
  ContainerLogo,
  ContainerUlLi,
  IconLiFb,
  IconLiTwit,
  IconLiLin,
  IconLi,
  IconLiMail,
  ContainerConnexion,
} from "../Styled-components/HeaderStyled";

export default function Header() {
  return (
    <ContainerNav>
      <ContainerLogo>
        <Logo src={logo} alt="logo favart" />
      </ContainerLogo>
      <ContainerUlLi>
        <IconLiFb className="faceBook">
          <i class="fab fa-facebook"></i>
        </IconLiFb>

        <IconLiTwit className="twitter">
          <i class="fab fa-twitter"></i>
        </IconLiTwit>

        <IconLiLin className="linkedin">
          <i class="fab fa-linkedin-in"></i>
        </IconLiLin>

        <IconLi className="hootSuite">
          <Hoot src={hoot} alt="logo hootsuite" />
        </IconLi>
        <IconLiMail className="mail">
          <i class="far fa-envelope"></i>
        </IconLiMail>
      </ContainerUlLi>
      <ContainerConnexion>Connexion / Inscription</ContainerConnexion>
    </ContainerNav>
  );
}
