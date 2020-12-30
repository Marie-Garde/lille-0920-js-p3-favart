import styled from "styled-components";
import { device } from "../Assets/Device/Device";

export const ContainerHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  height: 15vh;
  width: 100%;
  background-color: #1f89d1;
  @media ${device.smallDevices} {
    height: 10vh;
  }
`;

export const ContainerHeaderMenuLink = styled.div`
  margin-left: 15vw;
  @media ${device.smallDevices} {
    margin-left: 7vw;
  }
`;

export const MenuLink = styled.a`
  font-size: 3rem;
  color: #0e273d;
  text-decoration: none;
  @media ${device.smallDevices} {
    font-size: 1.5rem;
  }
`;
