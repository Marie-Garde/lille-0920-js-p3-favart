import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import {SlideStyle, Img} from '../styled-components/CarouselStyle';
import logo12 from '../assets/images/logo12.png';
import Logo45 from  '../assets/images/Logo45.png';
import logo67 from  '../assets/images/logo67.png';
import logo1011 from  '../assets/images/logo1011.png';
import logo1213 from  '../assets/images/logo1213.png';

const AutoplayExample = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div>
      <div>
        <Slide autoplay={autoplay}>
          <SlideStyle>
            <Img src={logo12} />
          </SlideStyle>
          <SlideStyle>
            <Img src={Logo45} />
          </SlideStyle>
          <SlideStyle>
            <Img src={logo67} />
          </SlideStyle>
          <SlideStyle>
            <Img src={logo1011} />
          </SlideStyle>
          <SlideStyle>
            <Img src={logo1213} />
          </SlideStyle>
        </Slide>
      </div>
    </div>
  );
};

export default AutoplayExample;