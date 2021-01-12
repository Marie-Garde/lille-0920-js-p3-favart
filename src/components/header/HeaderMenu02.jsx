import React from "react";
import HeaderBody from "./HeaderBody02";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
  MenuLinkAgissons,
} from "../../styled-components/header/HeaderMenuStyled02.jsx";

export default function HeaderMenu() {
  return (
    <>
      <ContainerHeaderMenu>
        <ContainerHeaderMenuLink>
          <MenuLink to="/"> 01 /</MenuLink>
          <MenuLinkAgissons to="/agissons"> 02 - Agissons /</MenuLinkAgissons>
          <MenuLink href=""> 03 /</MenuLink>
          <MenuLink href=""> 04</MenuLink>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
