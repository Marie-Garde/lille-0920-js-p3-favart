import logoFavart from "../assets/logo-icon-header/FAVART.jpg";

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
  DivLabel,
  Formulaire,
  Input,
  Button,
  SpanLink,
} from "../styled-components/SignUp";

export default function signup() {
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
          <Formulaire>
            <DivLabel>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </DivLabel>
            <DivLabel>
              <Input
                type="num"
                name="phone"
                id="phone"
                placeholder="Téléphone"
                required
              />
            </DivLabel>
            <DivLabel>
              <Input
                type="text"
                name="password"
                id="password"
                placeholder="Mot de passe"
                required
              />
            </DivLabel>
            <DivLabel>
              <Input
                type="text"
                name="password"
                id="password"
                placeholder="Confirmez le mot de passe"
                required
              />
            </DivLabel>
            <Button>Confirmer</Button>
          </Formulaire>
          <H2>
            Déjà un compte ? <SpanLink to="/connexion">Connexion</SpanLink>
          </H2>
        </ContainerForm>
      </ContainerInscription>
    </Background>
  );
}
