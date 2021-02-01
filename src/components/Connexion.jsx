import useForm from "./ConnexionLogin";
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
} from "../styled-components/Connexion";

export default function Connection({ setToken }) {
  const { handleChange, values, handleSubmit } = useForm({ setToken });
  return (
    <Background>
      <ContainerInscription>
        <ContainerLogo>
          <Logo src={logoFavart}></Logo>
          <Slogan>
            The best way to shape the Future is to <Span>co create</Span> it
            NOW.
          </Slogan>
        </ContainerLogo>
        <ContainerForm>
          <TitleForm>Connexion</TitleForm>
          <Formulaire onSubmit={handleSubmit}>
            <fieldset>
              <DivLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </DivLabel>
              <DivLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
              </DivLabel>
              <Button type="submit" value="Envoyer" onClick={handleSubmit}>
                Confirmer
              </Button>
            </fieldset>
          </Formulaire>
          <H2>
            Pas encore de compte ?
            <SpanLink to="/inscription"> Inscription</SpanLink>
          </H2>
        </ContainerForm>
      </ContainerInscription>
    </Background>
  );
}
