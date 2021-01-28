import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  FirstTitle,
  Container,
  TitleProject,
  Flex,
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
  Page,
  ContainerLogo,
  FlexContainer,
} from "../styled-components/FlexProjet";

export default function FlexProjet() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/projets/")
      .then(function (response) {
        setProjets(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Page>
        <FirstTitle>
          S’autoriser le droit à l’expérimentation territoriale avec les acteurs
          engagés
        </FirstTitle>
        <Container>
          {projets.map((projet) => {
            return (
              <div key={projet.id}>
                <Flex>
                  <BlockLogoTitle>
                    <ContainerLogo bk={projet.logo}>
                      <LogoProjet /*src={projet.logo} alt="image projet"*/ />
                    </ContainerLogo>
                    <TitleProject>{projet.titre}</TitleProject>
                  </BlockLogoTitle>
                  <ContainerBlock>
                    <BlockUl>
                      <ContainerUl1>
                        <Test>
                          <LiList>
                            <Span>Porteur du projet :</Span>
                            <p>{projet.porteurs}</p>
                          </LiList>
                          <LiList>
                            <Span>Enjeux :</Span>
                            <p>{projet.enjeux}</p>
                          </LiList>
                          <LiList>
                            <Span>Mission Favart :</Span>
                            <p>{projet.missions}</p>
                          </LiList>
                          <LiList>
                            <Span>Partenaires :</Span>
                            <p>{projet.partenaires}</p>
                          </LiList>
                          <LiList>
                            <Span>Territoires :</Span>
                            <p>{projet.patenaires}</p>
                          </LiList>

                          <LiList>
                            <OutilsContainer>
                              <Span>Outils Favart :</Span>
                              <Center>
                                <Tools>{projet.outils}</Tools>
                              </Center>
                            </OutilsContainer>
                          </LiList>
                        </Test>
                      </ContainerUl1>
                    </BlockUl>
                  </ContainerBlock>
                </Flex>
              </div>
            );
          })}
        </Container>
      </Page>
    </>
  );
}
