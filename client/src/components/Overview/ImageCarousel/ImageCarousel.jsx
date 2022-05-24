import React, { useState } from 'react';
import ImageCarouselData from './ImageCarouselData.jsx';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageCarousel = ( { slides } ) => {
  //State Hooks
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //Right Arrow Click Function
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  //Left Arrow Click Function
  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  }

  //Check for data
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='relative h-1/2 justify-center flex'>
      <div>
        <div className='absolute top-1/2 left-8 z-10 cursor-pointer select-none text-5xl'>
            <FaArrowAltCircleLeft onClick={prevSlide}/>
        </div>
        <div className='absolute top-1/2 right-8 z-10 cursor-pointer select-none text-5xl'>
            <FaArrowAltCircleRight onClick={nextSlide}/>
        </div>

        {ImageCarouselData.map((slide, index) => {
          return (
            <div className={'test'} key={index}>

              {index === current && (<img src={slide.image} alt='random image' className='rounded-md'/>)}
            </div>
          )
        })}

      </div>
    </section>
  )
};

export default ImageCarousel;