import React from "react";

import {
  ContainerNav2,
  ContainerNav2Link,
  Nav2Img,
  NavLink,
} from "../Styled-components/HeaderStyled.jsx";

export default function Header() {
  return (
    <>
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
    </>
  );
}
