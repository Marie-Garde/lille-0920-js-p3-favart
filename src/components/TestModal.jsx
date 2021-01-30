import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";

const PictureContent = styled.div`
  &.hide {
    display: none;
  }
`;

const Picture = styled.img`
  height: 30vh;
  width: auto;
`;
const Button = styled.button`
  height: 20vh;
  width: 20vw;
`;

const Image = styled.img`
  max-height: 15vh;
  max-width: 20vw;
`;
const Content = styled.div``;

const ContentProject = styled.div`
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 80vw;
  flex-wrap: wrap;
  gap: 5vh;
`;

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
    <ContentProject>
      {projets.map((projet) => (
        <Content key={projet.id}>
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
            <Picture src={projet.logo} />
            <h1>{projet.titre}</h1>
            <p>{projet.porteurs}</p>
            <p>{projet.partenaires}</p>
            <p>{projet.territoires}</p>
            <p>{projet.enjeux}</p>
            <p>{projet.missions}</p>
            <p>{projet.outils}</p>
          </PictureContent>
        </Content>
      ))}
    </ContentProject>
  );
}
