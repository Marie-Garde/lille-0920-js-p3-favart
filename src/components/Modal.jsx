import React, {useRef, useEffect, useCallback, useState} from 'react';
import axios from "axios";
import {useSpring, animated} from 'react-spring'
import {Background,ModalWrapper,ModalImg,ModalContent,CloseModalButton} from '../styled-components/ModalStyle';
import {Container,FlexContainer,FlexLogoTitle,Img,Title,FlexText,Span, Ul,ContainersM,Button} from "../styled-components/ProjectStyle";


export default function Modal({showModal, setShowModal}) {
    const [projets, setProjets] = useState([]);
    const modalRef = useRef()

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

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

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
        {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
            <animated.div style ={animation}>
            <ModalWrapper showModal={showModal}>
            <ModalImg src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/08/firefox-nouveau-logo-770.jpg"/>
            <ModalContent>
                {projets.map((projet)=>{
                    return (
                        <FlexContainer key={projet.id}>
                        <FlexLogoTitle>
                            <Img src={projet.logo}/>
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
            </ModalContent>
            <CloseModalButton aria-label='close modal' onClick={()=> setShowModal(prev => !prev)}/>
            </ModalWrapper>
            </animated.div>
        </Background>
     ) : null}
        </>
    )
};