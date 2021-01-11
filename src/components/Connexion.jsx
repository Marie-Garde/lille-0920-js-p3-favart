import logoFavart from "../assets/logoFavart.jpg";

import {
  Background,
  ContainerInscription,
  ContainerForm,
  Logo,
  ContainerLogo,
  Slogan,
  Span,
  TitleForm,
  H2,
} from "../Styled-components/Connexion";

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
        <ContainerForm>
          <TitleForm>Inscription</TitleForm>
          <H2>Déjà un compte ? Connexion</H2>
        </ContainerForm>
      </ContainerInscription>
    </Background>
  );
}
