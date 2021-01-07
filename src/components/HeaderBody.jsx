import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

import {
  ContainerTitle,
  Title,
  TitleSpan,
  ContainerAuthorSentence,
  AuthorSentence,
  ContainerMoreInformation,
  MoreInformationSentence,
} from "../styled-components/HeaderBodyStyled.jsx";

export default function HeaderBody() {
  const [hidden, setHidden] = useState(false);
  const onClick = () => {
    setHidden(true);
  };
  return (
    <>
      <ContainerTitle>
        <Title>
          pourquoi nous <TitleSpan>existons</TitleSpan>?
        </Title>
      </ContainerTitle>

      <ContainerAuthorSentence>
        <AuthorSentence>
          "Atteindre le plus grand nombre en mettant
        </AuthorSentence>
        <AuthorSentence> la barre très haut" Agnès Varda</AuthorSentence>
      </ContainerAuthorSentence>
      <>
        <ContainerMoreInformation hidden={hidden} onClick={onClick}>
          <MoreInformationSentence>En savoir plus</MoreInformationSentence>
        </ContainerMoreInformation>
        {hidden ? <Main /> : null}
        {hidden ? <Footer /> : null}
      </>
    </>
  );
}
