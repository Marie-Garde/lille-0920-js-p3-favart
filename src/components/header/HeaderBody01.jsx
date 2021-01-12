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
} from "../../styled-components/header/HeaderBodyStyled.jsx";

export default function HeaderBody() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
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
        <ContainerMoreInformation visible={visible} onClick={onClick}>
          <MoreInformationSentence>En savoir plus</MoreInformationSentence>
        </ContainerMoreInformation>
        {visible ? <Main /> : null}
        {visible ? <Footer /> : null}
      </>
    </>
  );
}
