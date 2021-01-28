import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container,FlexContainer,FlexLogoTitle,Img,Title,FlexText} from "../styled-components/ProjectStyle";

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
            <div>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis quos earum</h1>
                <Container>
                    {projets.map((projet)=>{
                        return (
                                <FlexContainer key={projet.id}>
                                    <FlexLogoTitle>
                                        <Img src={projet.logo}/>
                                        <Title>{projet.titre}</Title>
                                    </FlexLogoTitle>
                                    <FlexText>
                                        <ul>
                                            <li>
                                                <span>Porteur du projet :</span>
                                                <p>{projet.porteurs}</p>
                                            </li>
                                            <li>
                                                <span>Enjeux :</span>
                                                <p>{projet.enjeux}</p>
                                            </li>
                                            <li>
                                                <span>Missions Favart :</span>
                                                <p>{projet.missions}</p>
                                            </li>
                                            <li>
                                                <span>Partenaires :</span>
                                                <p>{projet.partenaires}</p>
                                            </li>
                                            <li>
                                                <span>Territoires :</span>
                                                <p>{projet.patenaires}</p>
                                            </li>
                                            <li>
                                                <span>outils :</span>
                                                <p>{projet.outils}</p>
                                            </li>
                                        </ul>
                                    </FlexText>
                                </FlexContainer>
                        )
                    })}
                </Container>
            </div>
    )
}