import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const ContainerHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  height: 6vh;
  background-color: #1f89d1;
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    height: 7vh;
  }
`;

export const ContainerHeaderMenuLink = styled.div`
  margin-left: 6vw;
`;

export const MenuLink = styled.a`
  font-size: 1.5rem;
  color: #0e273d;
  text-decoration: none;
  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;
