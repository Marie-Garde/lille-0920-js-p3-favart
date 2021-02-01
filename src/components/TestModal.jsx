import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";

const PictureContent = styled.div`
    position: relative;
    top: -180px;
    left: 380px;
    height:0px;
  &.hide {
    display: none;
  }
`;

const Picture = styled.img`
  height: 25vh;
  width: auto;
`;
const Button = styled.button`
  height: 20vh;
  width: 20vw;
`;

const Flex = styled.div`
  display: flex;
  overflow:hidden;
  flex-direction: column;
  gap: 3vh;
  margin: 10vh 6vw 0 6vw;
  height:200vh;

  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top:2vh;
  text-decoration:underline;
`;

const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3vh 3vw 5vh 3vw;

  h1 {
    color:#fff;
    font-size:2.5rem;
  }
`;

const Container = styled.div`
  border: 1px solid black;
  border-radius:15px;
  background-color:#122239;
  width:60vw;
`;

const Content = styled.div`
  margin: 0 3vw 3vh 3vw;
  color:#fff;
`;

const Image = styled.img`
  max-height: 15vh;
  max-width: 20vw;
`;

const Title = styled.h1`
  margin-bottom: 6vh;
`


export default function DataTest() {
  const [projets, setProjets] = useState([]);
  const [isDisplay, setDisplay] = useState({ isDisplay: false, id: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5050/projets")
      .then(function (response) {
        setProjets(response.data);
        console.log(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <>
      <Flex>
        <Title>Nos projets en cours</Title>
        {projets.map((projet) => (
          <div key={projet.id}>
            <Button
              onClick={() =>
                setDisplay({ isDisplay: !isDisplay.isDisplay, id: projet.id })
              }
            >
             <Image src={projet.logo} />
            </Button>
            <PictureContent
              onClick={() => console.log(projet.id)}
              className={
                isDisplay.isDisplay === true && isDisplay.id === projet.id
                  ? ""
                  : "hide"
              }
            >
              <Container>
                <LogoTitle>
                  <Picture src={projet.logo} />
                  <h1>{projet.titre}</h1>
                </LogoTitle>
                <Content>
                  <H3>Porteur du projet :</H3>
                  <p>{projet.porteurs}</p>
                  <H3>Les partenaires :</H3>
                  <p>{projet.partenaires}</p>
                  <H3>Territoires :</H3>
                  <p>{projet.territoires}</p>
                  <H3>Enjeux :</H3>
                  <p>{projet.enjeux}</p>
                  <H3>Mission Favart :</H3>
                  <p>{projet.missions}</p>
                  <H3>Outils Favart :</H3>
                  <p>{projet.outils}</p>
                </Content>
              </Container>
            </PictureContent>
          </div>
        ))}
      </Flex>
    </>
  );
}
