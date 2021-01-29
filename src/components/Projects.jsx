import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container,FlexContainer,FlexLogoTitle,Img,Title,FlexText,Span, Ul,ContainersM,Button} from "../styled-components/ProjectStyle";
import Modal from "./Modal";


export default function FlexProjet() {
    const [projets, setProjets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
  
    const openModal = () => {
        setShowModal(prev => !prev)
    }

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
               {projets.map((projet)=>{
                    return (
                        <FlexContainer key={projet.id}>
                        <FlexLogoTitle>
                            <Img onClick={openModal} src={projet.logo}/>
                            <Modal showModal={showModal} setShowModal={setShowModal} />
                            <Title>{projet.titre}</Title>
                        </FlexLogoTitle>
                        
                        <FlexText>
                            <Ul>
                                <li>
                                    <Span>Porteur du projet :</Span>
                                    <p>{projet.porteurs}</p>
                                </li>
                                <li>
                                    <Span>Enjeux :</Span>
                                    <p>{projet.enjeux}</p>
                                </li>
                                <li>
                                    <Span>Missions Favart :</Span>
                                    <p>{projet.missions}</p>
                                </li>
                                <li>
                                    <Span>Partenaires :</Span>
                                    <p>{projet.partenaires}</p>
                                </li>
                                <li>
                                    <Span>Territoires :</Span>
                                    <p>{projet.patenaires}</p>
                                </li>
                                <li>
                                    <Span>outils :</Span>
                                    <p>{projet.outils}</p>
                                </li>
                            </Ul>
                        </FlexText>
                    </FlexContainer>
                    )
                
                })}
            </div>
    )
}