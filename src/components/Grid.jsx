import React from "react";
import oxalia from "../assets/logosProjetsGrid/logo-oxalia.png";
import chenelet from "../assets/logosProjetsGrid/FONCIERE_Logo-Couleur-vertical-1.png";

import {
  Container,
  Title,
  Grid1,
  Grid2,
  LogoProjet,
  LogoProjet2,
  BlockLogoTitle,
  BlockLogoTitle2,
  BlockUl,
  ContainerBlock,
  ContainerUl1,
  Tools,
  OutilsContainer,
  Test,
  LiList,
  Span,
  Center,
  TitleUp,
} from "../styled-components/Grid";

export default function Grid() {
  return (
    <>
    <TitleUp>Nos projets partenaires :</TitleUp>
      <Container>
        <Grid1>
          <BlockLogoTitle>
            <LogoProjet src={oxalia} alt="image projet" />
            <Title>D’abord Jeune</Title>
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
                    <Span>Mission Favart :</Span>
                    <p>
                      Mise en œuvre d’une nouvelle stratégie régionale pour
                      lutter contre les sorties sèches à la fin de l’aide
                      sociale à l’enfance (ASE)
                    </p>
                  </LiList>
                  <LiList>
                    <Span>Partenaires :</Span>
                    <p>
                      Stratégie nationale de prévention et de lutte contre la
                      pauvreté, Département du Nord.
                    </p>
                  </LiList>
                  <LiList>
                    <Span>Territoires :</Span>
                    <p>
                      Hauts-de-France, Valenciennois, Métropole Européenne de
                      Lille, Maubeugeois-Avesnois
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
            </BlockUl>
          </ContainerBlock>
        </Grid1>
        <Grid2>
          <BlockLogoTitle2>
            <LogoProjet2 src={chenelet} alt="image projet" />
            <Title>Foncière Chênelet</Title>
          </BlockLogoTitle2>
          <ContainerBlock>
            <BlockUl>
              <ContainerUl1>
                <Test>
                  <LiList>
                    <Span>Porteur du projet :</Span>
                    <p>Foncière Chênelet</p>
                  </LiList>
                  <LiList>
                    <Span>Enjeux :</Span>
                    <p>
                      Transformer la vacance foncière en logement social très
                      écologique pour les personnes à faible revenu
                    </p>
                  </LiList>
                  <LiList>
                    <Span>Mission Favart :</Span>
                    <p>
                      Transformer le modèle économique du logement social à
                      travers la mise en oeuvre du plus important Contrat à
                      Impact Social structuré en France basé sur les coûts
                      évités économiques, sociaux et environnementaux
                    </p>
                  </LiList>
                  <LiList>
                    <Span>Partenaires :</Span>
                    <p>
                      Ministère du Logement, Agence nationale de l’habitat
                      (Anah)
                    </p>
                  </LiList>
                  <LiList>
                    <Span>Territoires :</Span>
                    <p>Département du Pas-de-Calais, Département du Cher</p>
                  </LiList>

                  <LiList>
                    <OutilsContainer>
                      <Span>Outils Favart :</Span>
                      <Center>
                        <Tools>Droit à l’expérimentation</Tools>
                        <Tools>Modèle économique à impact</Tools>
                        <Tools>Modèle juridique et financier</Tools>
                      </Center>
                    </OutilsContainer>
                  </LiList>
                </Test>
              </ContainerUl1>
            </BlockUl>
          </ContainerBlock>
        </Grid2>
      </Container>
    </>
  );
}
