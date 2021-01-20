import React, { useState } from "react";
import Main from "../Main";
import Footer from "../Footer";
import Grid from "../Grid";
import AutoplayExemple from "../Carousel";

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
              <TitleSpan>ils </TitleSpan> et <TitleSpan>elles</TitleSpan> le font avec nous
            </Title>
          </ContainerTitle>
        </BlockTitle>
        <BlockSentence>
          <ContainerAuthorSentence>
            <AuthorSentence>
              Il y a plus dans l'échange que 
            </AuthorSentence>
            <AuthorSentence> dans la chose échangée</AuthorSentence>
          </ContainerAuthorSentence>
        </BlockSentence>
        <>
          <ContainerMoreInformation visible={visible} onClick={onClick}>
            <MoreInformationSentence>En savoir plus</MoreInformationSentence>
          </ContainerMoreInformation>
          {visible ? <Grid /> : null}
          {visible ? <AutoplayExemple /> : null}
          {visible ? <Footer /> : null }
        </>
      </Page>
    </>
  );
}
