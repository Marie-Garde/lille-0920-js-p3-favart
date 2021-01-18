import React from "react";
import HeaderBody from "./HeaderBody01";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
  MenuLinkMain,
} from "../../styled-components/header/HeaderMenuStyled.jsx";

export default function HeaderMenu() {
  return (
    <>
      <ContainerHeaderMenu>
        <ContainerHeaderMenuLink>
          <MenuLinkMain to="/">01 - Favart /</MenuLinkMain>
          <MenuLink to="/agissons"> 02 /</MenuLink>
          <MenuLink to="/ilsetelles"> 03 / </MenuLink>
          <MenuLink href=""> 04</MenuLink>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
