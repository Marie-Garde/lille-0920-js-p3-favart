import React from "react";
import HeaderBody from "./HeaderBody02";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
} from "../../styled-components/header/HeaderMenuStyled.jsx";

export default function HeaderMenu() {
  return (
    <>
      <ContainerHeaderMenu>
        <ContainerHeaderMenuLink>
          <MenuLink to="/">01 - Favart </MenuLink>
          <MenuLink to="/agissons">/ 02 /</MenuLink>
          <MenuLink href=""> 03 </MenuLink>
          <MenuLink href="">/ 04</MenuLink>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
