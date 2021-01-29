import React, { useState, useEffect } from "react";
import axios from "axios";
import {FlexLogo, Img, Testing} from "../styled-components/LogoStyle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


export default function Logo() {
    const [logos, setLogos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5050/logos/")
        .then(function (response) {
            setLogos(response.data);
            console.log(response.data)
        })
        .catch(function (error){
        });
    }, []);

    return (
        
        <>
        <h1>Nos partenaires :</h1>
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={4000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        slidesToSlide="4"
        >
    {logos.map((logo)=>{
        return (
            <Testing>
            <Img src={logo.Logo}/>
            </Testing>
        )
    })}
    
        </Carousel>
        </>
    )
}