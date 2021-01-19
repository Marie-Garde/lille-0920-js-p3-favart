import React from "react";
import oxalia from "../assets/logosProjetsGrid//logo-oxalia.png";

import {
  Container,
  Title,
  Grid1,
  Description,
  Grid2,
  Details2,
  Grid3,
  Details3,
  Grid4,
  Details4,
  Grid5,
  Details5,
  Grid6,
  Details6,
  LogoProjet,
  BlockLogoTitle,
  BlockUl,
  BlockDescription,
  ContainerBlock,
  ContainerUl1,
  ContainerUl2,
  Span1,
  Outils,
  OutilsContainer,
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
                <ul>
                  <li>
                    Porteur du projet :
                    <Span1>Groupement Oxalia (bailleurs sociaux)</Span1>
                  </li>
                  <li>
                    Enjeux :
                    <Span1>
                      Prévenir les sorties sèches à la fin des dispositifs
                      institutionnels et permettre l’accès au l’autonomie
                      citoyenne des jeunes
                    </Span1>
                  </li>
                  <li>
                    Territoires :
                    <Span1>
                      Hauts-de-France, Valenciennois, Métropole Européenne de
                      Lille, Maubeugeois-Avesnois
                    </Span1>
                  </li>
                  <li>
                    Mission Favart :
                    <Span1>
                      Mise en œuvre d’une nouvelle stratégie régionale pour
                      lutter contre les sorties sèches à la fin de l’aide
                      sociale à l’enfance (ASE)
                    </Span1>
                  </li>
                  <li>
                    <OutilsContainer>
                      Outils Favart :
                      <Outils>
                        <li>Droit à l’expérimentation</li>
                        <li>Communauté d’action</li>
                        <li>Modèle opérationnel</li>
                        <li>Modèle économique à impact</li>
                        <li>Modèle juridique et financier</li>
                      </Outils>
                    </OutilsContainer>
                  </li>
                </ul>
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
            <BlockDescription>
              {/*<Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                alias voluptates fugiat modi eveniet rerum vitae distinctio
                laudantium porro labore dolore illum sapiente temporibus eius
                nulla in, tenetur odio. Rerum.
              </Description>*/}
            </BlockDescription>
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
        <Grid4>
          <Title>Block4</Title>
          <Details4>ribus eius nulla in, tenetur odio. Rerum.</Details4>
        </Grid4>
        <Grid5>
          <Title>Block5</Title>
          <Details5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
            voluptates fugiat modi eveniet rerum vitae distinctio laudantium
            porro labore dolore illum sapiente temporibus eius nulla in, tenetur
            odio. Rerum.
          </Details5>
        </Grid5>
        <Grid6>
          <Title>Block6</Title>
          <Details6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
            voluptates fugiat modi eveniet rerum vitae distinctio laudantium
            porro labore dolore illum sapiente temporibus eius nulla in, tenetur
            odio. Rerum.
          </Details6>
        </Grid6>
      </Container>
    </>
  );
}
