import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import {SlideStyle} from '../styled-components/CarouselStyle'

const AutoplayExample = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div>
      <div>
        <Slide autoplay={autoplay}>
          <SlideStyle>

          </SlideStyle>
          <SlideStyle>

          </SlideStyle>
          <SlideStyle>

          </SlideStyle>
        </Slide>
      </div>
    </div>
  );
};

export default AutoplayExample;