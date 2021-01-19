import React from "react";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
} from "../../Styled-components/header/HeaderMenuStyled.jsx";

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
    </>
  );
}
