import React from "react";

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
  return (
    <>
      <ContainerTitle>
        <Title>
          pourquoi nous <TitleSpan>existons</TitleSpan>?
        </Title>
      </ContainerTitle>

      <ContainerAuthorSentence>
        <AuthorSentence>
          "Atteindre le plus grand nombre en mettant la
        </AuthorSentence>
        <AuthorSentence> barre très haut" Agnès Varda</AuthorSentence>
      </ContainerAuthorSentence>
      <>
        <ContainerMoreInformation>
          <MoreInformationSentence>Plus d'informations</MoreInformationSentence>
        </ContainerMoreInformation>
      </>
    </>
  );
}
