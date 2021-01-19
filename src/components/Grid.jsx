import React from "react";
import oxalia from "../Assets/logosProjetsGrid//logo-oxalia.png";

import {
  Container,
  Title,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Details2,
  LogoProjet,
  BlockLogoTitle,
  BlockUl,
  ContainerBlock,
} from "../Styled-components/Grid";

export default function Grid() {
  return (
    <>
      <Container>
        <Grid1>
          <BlockLogoTitle>
            <LogoProjet src={oxalia} alt="image projet" />
            <Title>Groupement Oxalia</Title>
          </BlockLogoTitle>
          <ContainerBlock>
            <BlockUl>
              <ul>
                <li>Porteur de projet :</li>
                <li>Enjeux :</li>
                <li>Mission FAVART :</li>
                <li>Territoire :</li>
                <li>Partenaires :</li>
              </ul>
              <ul>
                <li>Foncière Chênelet</li>
                <li>Transformer la vacance foncière en logement social très écologique pour les personnes à faible revenu</li>
                <li>Transformer le modèle économique du logement social à travers la mise en oeuvre du plus important Contrat à Impact Social structuré en France basé sur les coûts évités économiques, sociaux et environnementaux</li>
                <li>Ministère du Logement, Agence nationale de l’habitat</li>
              </ul>
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
          <Title>Block2</Title>
          <Details2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
            voluptates fugiat modi eveniet rerum vitae distinctio laudantium
            porro labore dolore illum sapiente temporibus eius nulla in, tenetur
            odio. Rerum.
          </Details2>
        </Grid3>
        <Grid4>
          <Title>Block2</Title>
          <Details2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
            voluptates fugiat modi eveniet rerum vitae distinctio laudantium
            porro labore dolore illum sapiente temporibus eius nulla in, tenetur
            odio. Rerum.
          </Details2>
        </Grid4>
      </Container>
    </>
  );
}
