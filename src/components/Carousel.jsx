import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import {SlideStyle, Img, Carousel, Title} from '../styled-components/CarouselStyle';
import carousel1 from '../assets/images/carousel1.png';
import carousel2 from '../assets/images/carousel2.png'
import carousel3 from '../assets/images/carousel3.png';


const AutoplayExample = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div>
      <Title>Nos partenaires :</Title>
      <Carousel>
        <Slide autoplay={autoplay}>
          <SlideStyle>
            <Img src={carousel1} />
          </SlideStyle>
          <SlideStyle>
            <Img src={carousel2} />
          </SlideStyle>
          <SlideStyle>
            <Img src={carousel3}/>
          </SlideStyle>
        </Slide>
      </Carousel>
    </div>
  );
};

export default AutoplayExample;