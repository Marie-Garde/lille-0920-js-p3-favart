import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  FlexContainer,
  FlexLogoTitle,
  Img,
  Title,
  FlexText,
  Span,
  Ul,
  ContainersM,
  Button,
} from "../styled-components/ProjectStyle";
import Modal from "./Modal";

export default function FlexProjet() {
  const [projets, setProjets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [curProject, changeProject] = useState({});

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/projets")
      .then(function (response) {
        setProjets(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("Beh!");
        console.log();
        console.log("Beh!");
      });
  }, []);

  return (
    <div>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis
        quos earum
      </h1>
      <FlexContainer>
        {projets.map((projet) => {
          return (
            <FlexLogoTitle key={projet.id}>
              <Img
                onClick={() => {
                  changeProject(projet);
                }}
                src={projet.logo}
              />
            </FlexLogoTitle>
          );
        })}
      </FlexContainer>
      <Modal
        projet={curProject}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
