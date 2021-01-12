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
  BlockButton,
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
              Comment nous <TitleSpan>agissons </TitleSpan>
            </Title>
          </ContainerTitle>
        </BlockTitle>
        <BlockSentence>
          <ContainerAuthorSentence>
            <AuthorSentence>
              "Il faut être enthousiaste de son métier pour y
            </AuthorSentence>
            <AuthorSentence>exceller", Denis Diderot</AuthorSentence>
          </ContainerAuthorSentence>
        </BlockSentence>
        <>
          <ContainerMoreInformation visible={visible} onClick={onClick}>
            <MoreInformationSentence>En savoir plus</MoreInformationSentence>
          </ContainerMoreInformation>
          {visible ? <Main /> : null}
          {visible ? <Footer /> : null}
        </>
      </Page>
    </>
  );
}
