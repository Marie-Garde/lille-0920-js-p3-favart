import logoFavart from "../Assets/logoFavart.jpg";

import {
  Background,
  ContainerInscription,
  ContainerForm,
  Logo,
  ContainerLogo,
  Slogan,
  Span,
} from "../Styled-components/ConnexionStyle";

export default function connexion() {
  return (
    <Background>
      <ContainerInscription>
        <ContainerLogo>
          <Logo src={logoFavart}></Logo>
          <Slogan>
            The best way to shape the Futur is to <Span>co create</Span> it.
          </Slogan>
        </ContainerLogo>
        <ContainerForm></ContainerForm>
      </ContainerInscription>
    </Background>
  );
}
