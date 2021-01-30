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

const Content = styled.div``;

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
          .catch(function (error) {
          });
      },[]);

  return (
    <div>
      {projets.map((projet) => (
        <Content key={projet.id}>
          <button
            onClick={() =>
              setDisplay({ isDisplay: !isDisplay.isDisplay, id: projet.id })
            }
          >
            {projet.id}
          </button>
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
          .
        </Content>
      ))}
    </div>
  );
}