import React from "react";

import {
  ContainerTitle,
  Title,
  Span,
  ContainerAuthorSentence,
  AuthorSentence,
  ContainerMoreInformation,
  MoreInformationSentence,
} from "../Styled-components/HeaderStyled.jsx";

export default function Header() {
  return (
    <>
      <ContainerTitle>
        <Title>
          pourquoi nous <Span>existons</Span> ?
        </Title>
      </ContainerTitle>
      <ContainerAuthorSentence>
        <AuthorSentence>
          "Atteindre le plus grand nombre en mettant la
        </AuthorSentence>
        <Citation> barre très haut" Agnès Varda</Citation>
      </ContainerAuthorSentence>
      <>
        <ContainerMoreInformation>
          <MoreInformationSentence>Plus d'informations</MoreInformationSentence>
        </ContainerMoreInformation>
      </>
    </>
  );
}
