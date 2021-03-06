import React, { useState } from "react";
import Main from "../Main";
import Footer from "../Footer";

import {
  Page,
  BlockTitle,
  ContainerTitle,
  Title,
  TitleSpan,
  BlockSentence,
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
      <Page>
        <BlockTitle>
          <ContainerTitle>
            <Title>
              pourquoi nous <TitleSpan>existons </TitleSpan>
            </Title>
          </ContainerTitle>
        </BlockTitle>
        <BlockSentence>
          <ContainerAuthorSentence>
            <AuthorSentence>
              "Atteindre le plus grand nombre en mettant la barre très haut",
              Agnès Varda
            </AuthorSentence>
          </ContainerAuthorSentence>
        </BlockSentence>
        <ContainerMoreInformation visible={visible} onClick={onClick}>
          <MoreInformationSentence>En savoir plus</MoreInformationSentence>
        </ContainerMoreInformation>
        {visible && (
          <>
            <Main />
            <Footer />
          </>
        )}
      </Page>
    </>
  );
}
