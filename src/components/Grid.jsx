import React from "react";
import oxalia from "../assets/logosProjetsGrid//logo-oxalia.png";

import {
  Container,
  Title,
  Grid1,
  Grid2,
  Details2,
  Grid3,
  Details3,
  LogoProjet,
  BlockLogoTitle,
  BlockUl,
  ContainerBlock,
  ContainerUl1,
  Tools,
  OutilsContainer,
  Test,
  LiList,
  Span,
  Center,
} from "../styled-components/Grid";

export default function Grid() {
  return (
    <>
      <Container>
        <Grid1>
          <BlockLogoTitle>
            <LogoProjet src={oxalia} alt="image projet" />
            <Title>Programme D’abord Jeune</Title>
          </BlockLogoTitle>
          <ContainerBlock>
            <BlockUl>
              <ContainerUl1>
                <Test>
                  <LiList>
                    <Span>Porteur du projet :</Span>
                    <p>Groupement Oxalia (bailleurs sociaux)</p>
                  </LiList>
                  <LiList>
                    <Span>Enjeux :</Span>
                    <p>
                      Prévenir les sorties sèches à la fin des dispositifs
                      institutionnels et permettre l’accès au l’autonomie
                      citoyenne des jeunes
                    </p>
                  </LiList>
                  <LiList>
                    <Span>Territoires :</Span>
                    <p>
                      Hauts-de-France, Valenciennois, Métropole Européenne de
                      LiListlle, Maubeugeois-Avesnois
                    </p>
                  </LiList>
                  <LiList>
                    <Span>Mission Favart :</Span>
                    <p>
                      Mise en œuvre d’une nouvelle stratégie régionale pour
                      lutter contre les sorties sèches à la fin de l’aide
                      sociale à l’enfance (ASE)
                    </p>
                  </LiList>
                  <LiList>
                    <OutilsContainer>
                      <Span>Outils Favart :</Span>
                      <Center>
                        <Tools>Droit à l’expérimentation</Tools>
                        <Tools>Communauté d’action</Tools>
                        <Tools>Modèle opérationnel</Tools>
                        <Tools>Modèle économique à impact</Tools>
                        <Tools>Modèle juridique et financier</Tools>
                      </Center>
                    </OutilsContainer>
                  </LiList>
                </Test>
              </ContainerUl1>
              {/*<ContainerUl2>
                <ul>
                  <li>Groupement Oxalia (bailleurs sociaux)</li>
                  <li>
                    Prévenir les sorties sèches à la fin des dispositifs
                    institutionnels et permettre l’accès au l’autonomie
                    citoyenne des jeunes
                  </li>
                  <li>
                    Hauts-de-France, Valenciennois, Métropole Européenne de
                    Lille, Maubeugeois-Avesnois
                  </li>
                  <li>
                    Mise en œuvre d’une nouvelle stratégie régionale pour lutter
                    contre les sorties sèches à la fin de l’aide sociale à
                    l’enfance (ASE)
                  </li>
                  <li>
                    <ul>
                      <li>Droit à l’expérimentation</li>
                      <li>Communauté d’action</li>
                      <li>Modèle opérationnel</li>
                      <li>Modèle économique à impact</li>
                      <li>Modèle juridique et financier</li>
                    </ul>
                  </li>
                </ul>
              </ContainerUl2>*/}
            </BlockUl>
          </ContainerBlock>
        </Grid1>
        <Grid2>
          <Title>Block2</Title>
          <Details2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
            voluptates fugiat modi eveniet rerum vitae distinctio laudantium
            porro labore dolore illum sapiente temporibus eius nulla in, tenetur
            odio. Rerum.
          </Details2>
        </Grid2>

        <Grid3>
          <Title>Block3</Title>
          <Details3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
            voluptates fugiat modi eveniet rerum vitae distinctio laudantium
            porro labore dolore illum sapiente temporibus eius nulla in, tenetur
            odio. Rerum.
          </Details3>
        </Grid3>
      </Container>
    </>
  );
}
