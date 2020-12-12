import React from "react";
import logo from "../Assets/nav/FAVART.jpg";
import hoot from "../Assets/nav/hoot.png";
import placeholder from "../Assets/nav2/diago.jpg";

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
  ContainerNav2,
  ContainerNav2Link,
  Nav2Img,
  NavLink,
  ContainerTitle1,
  Title1,
  Span1,
} from "../Styled-components/HeaderStyled";

export default function Header() {
  return (
    <>
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
    </>
  );
}
