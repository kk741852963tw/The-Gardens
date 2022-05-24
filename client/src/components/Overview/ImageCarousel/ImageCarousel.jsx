import React, { useState } from 'react';
import ImageCarouselData from './ImageCarouselData.jsx';

const ImageCarousel = (props) => {
  const [current, setCurrent] = useState(0);
  //const length = slides.length;

  return (
    <div>
        {ImageCarouselData.map((slide, index) => {
          return (
            <img src={slide.image} key={slide.id} alt='random image' />
          )
        })}
    </div>
  )
};

export default ImageCarousel;