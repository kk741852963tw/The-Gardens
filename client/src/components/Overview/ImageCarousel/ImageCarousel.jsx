import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
const axios = require('axios');

const ImageCarousel = ({ activeStyle }) => {
  //Data Check
  if (!activeStyle[0]) {
    return null;
  }
  console.log(activeStyle);
  const photoUrl = activeStyle[0].photos.map(photo => {
    console.log(photo.url);
    return photo.url;
  });
  console.log(photoUrl);

  // State Hooks
  const [current, setCurrent] = useState(0);
  const length = photoUrl.length;

  // Right Arrow Click Function
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  // Left Arrow Click Function
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  //Data Check
  if (!Array.isArray(photoUrl) || photoUrl.length <= 0) {
    return null
  }

  //  Carousel Construct
  return (
    <section className='relative h-1/2 justify-center flex-left'>
      <div className='scale-125 h-[500px]'>
        <div className='absolute top-1/2 left-8 z-10 cursor-pointer select-none text-5xl'>
            <FaArrowAltCircleLeft onClick={prevSlide}/>
        </div>
        <div className='absolute top-1/2 right-8 z-10 cursor-pointer select-none text-5xl'>
            <FaArrowAltCircleRight onClick={nextSlide}/>
        </div>

        {photoUrl.map((image, index) => {
          return (
            <div className={'test'} key={index}>

              {index === current && (<img src={image} alt='random image' className='rounded-md object-fill overflow-hidden'/>)}
            </div>
          )
        })}

      </div>
    </section>
  )
};

export default ImageCarousel;