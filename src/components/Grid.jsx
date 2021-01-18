import React from "react";

import {
  Container,
  Title,
  Grid1,
  Details1,
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
} from "../styled-components/Grid";

export default function Grid() {
  return (
    <>
      <Container>
        <Grid1>
          <LogoProjet
            src="../../assets/logosProjetsGrid/logo-oxalia.png"
            alt="image projet"
          />
          <Details1>
            <Title>Programme D’abord Jeune</Title>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
            voluptates fugiat modi eveniet rerum vitae distinctio laudantium
            porro labore dolore illum sapiente temporibus eius nulla in, tenetur
            odio. Rerum.
          </Details1>
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
