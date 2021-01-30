import React, {useRef, useEffect, useCallback, useState} from 'react';
import axios from "axios";
import {useLocation} from 'react-router-dom'
import {useSpring,} from 'react-spring'
import {Background,ModalWrapper,ModalImg,ModalContent,CloseModalButton} from '../styled-components/ModalStyle';
import {Container,FlexContainer,FlexLogoTitle,Img,Title,FlexText,Span, Ul,ContainersM,Button} from "../styled-components/ProjectStyle";


export default function Modal({showModal, setShowModal, projet}) {
    const modalRef = useRef()
    let location = useLocation()

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e =>{
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },[keyPress])

    return(
        <>
        {showModal && projet.logo ? (
        <Background ref={modalRef} onClick={closeModal}>
            <ModalWrapper showModal={showModal}>
                <div>
            <ModalImg src={location.state.projet.logo}/>
            <Title>{location.state.projet.titre}</Title>
            </div>
            <ModalContent>
                
                        <FlexContainer key={location.state.projet.id}>
                        <FlexText>
                            <Ul>
                                <li>
                                    <Span>Porteur du projet :</Span>
                                    <p>{location.state.projet.porteurs}</p>
                                </li>
                                <li>
                                    <Span>Enjeux :</Span>
                                    <p>{location.state.projet.enjeux}</p>
                                </li>
                                <li>
                                    <Span>Missions Favart :</Span>
                                    <p>{location.state.projet.missions}</p>
                                </li>
                                <li>
                                    <Span>Partenaires :</Span>
                                    <p>{location.state.projet.partenaires}</p>
                                </li>
                                <li>
                                    <Span>Territoires :</Span>
                                    <p>{location.state.projet.patenaires}</p>
                                </li>
                                <li>
                                    <Span>outils :</Span>
                                    <p>{location.state.projet.outils}</p>
                                </li>
                            </Ul>
                        </FlexText>
                    </FlexContainer>
                    )
            </ModalContent>
            <CloseModalButton aria-label='close modal' onClick={()=> setShowModal(prev => !prev)}/>
            </ModalWrapper>
        </Background>
     ) : null}
        </>
    )
};