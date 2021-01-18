import React from "react";
import HeaderBody from "./HeaderBody03";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
  MenuLinkIlsEtElles,
} from "../../styled-components/header/HeaderMenuStyled03.jsx";

export default function HeaderMenu() {
  return (
    <>
      <ContainerHeaderMenu>
        <ContainerHeaderMenuLink>
          <MenuLink to="/sommaire">00 /</MenuLink>
          <MenuLink to="/"> 01 /</MenuLink>
          <MenuLink to="/agissons"> 02 / </MenuLink>
          <MenuLinkIlsEtElles to="/ilsetelles">
            03 - ils et elles le font avec nous /
          </MenuLinkIlsEtElles>
          <MenuLink to="/action"> 04</MenuLink>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
