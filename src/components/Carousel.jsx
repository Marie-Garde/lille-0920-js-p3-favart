import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import {SlideStyle, Img, Carousel} from '../styled-components/CarouselStyle';
import logo5678 from '../assets/images/logo5678.png';
import logo1234 from '../assets/images/logo1234.png'
import logo9101112 from '../assets/images/logo9101112.png';


const AutoplayExample = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div>
      <Carousel>
        <Slide autoplay={autoplay}>
          <SlideStyle>
            <Img src={logo1234} />
          </SlideStyle>
          <SlideStyle>
            <Img src={logo5678} />
          </SlideStyle>
          <SlideStyle>
            <Img src={logo9101112}/>
          </SlideStyle>
        </Slide>
      </Carousel>
    </div>
  );
};

export default AutoplayExample;