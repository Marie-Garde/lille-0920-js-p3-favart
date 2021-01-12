import React from "react";
import HeaderBody from "./HeaderBody01";

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
          <MenuLink href="">01 - Favart </MenuLink>
          <MenuLink href="">/ 02 /</MenuLink>
          <MenuLink href=""> 03 </MenuLink>
          <MenuLink href="">/ 04</MenuLink>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
