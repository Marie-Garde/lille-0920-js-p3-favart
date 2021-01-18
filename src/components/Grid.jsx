import React from "react";

import {
  Container,
  Title,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Details1,
  Details2,
  LogoProjet,
  Flexbox,
  Head,
  Test,
  ProjectTitle,

} from "../styled-components/Grid";

import oxalia from "../assets/oxalia.png";

export default function Grid() {
  return (
    <>
      <Container>
        <Grid1>
          <Flexbox>
            <Head>
              <LogoProjet src={oxalia} alt="image projet" />
            </Head>
            <div>
              <Test>
                <ul>
                  <li>Localisation :</li>
                  <li>Status :</li>
                  <li>Date de début :</li>
                  <li>Date de fin :</li>
                </ul>
                <ul>
                  <li>Paris</li>
                  <li>Online</li>
                  <li>13 Juillet 2019</li>
                  <li>10 Septembre 2309:</li>
                </ul>
              </Test>
            </div>
              <Details1>
                <Title>Programme D’abord Jeune :</Title>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                alias voluptates fugiat modi eveniet rerum vitae distinctio
                laudantium porro labore dolore illum sapiente temporibus eius
                nulla in, tenetur odio. Rerum.
              </Details1>
          </Flexbox>
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
