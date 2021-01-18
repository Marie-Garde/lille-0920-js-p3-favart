import React from "react";
import oxalia from "../assets/logosProjetsGrid//logo-oxalia.png";

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
} from "../styled-components/Grid";

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
                <li>Localisation:</li>
                <li>Status:</li>
                <li>date début:</li>
                <li>date fin:</li>
              </ul>
              <ul>
                <li>Paris</li>
                <li>Online</li>
                <li>19 Septembre 2912</li>
                <li>18 Décembre 3012</li>
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
