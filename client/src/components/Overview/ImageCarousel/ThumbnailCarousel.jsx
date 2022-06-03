import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ThumbnailCarousel = ( { thumbnailUrl } ) => {
  if (!thumbnailUrl) {
    return null;
  }

    // State Hooks
    const [current, setCurrent] = useState(0);
    const length = thumbnailUrl.length;

    // Right Arrow Click Function
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // Left Arrow Click Function
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
    }

    //Data Check
    if (!Array.isArray(thumbnailUrl) || thumbnailUrl.length <= 0) {
      return null
    }

  return (
    <div>
      <section className='relative flex justify-center max-h-full overflow-hidden'>
          <div className="justify-center max-h-3/4 w-full overflow-hidden object-cover object-bottom">
            <div className='absolute top-1/2 left-8 z-10 cursor-pointer select-none text-5xl'>
                <FaArrowAltCircleLeft onClick={prevSlide}/>
            </div>
            <div className='absolute top-1/2 right-8 z-10 cursor-pointer select-none text-5xl'>
                <FaArrowAltCircleRight onClick={nextSlide}/>
            </div>
            <div className='grid grid-cols-6 gap-2 pt-4'>
              {thumbnailUrl.map((image, index) => {
                return (
                  <>
                      {(
                        index === current ||
                        index === current + 1 ||
                        index === current + 2 ||
                        index === current + 3 ||
                        index === current + 4 ||
                        index === current + 5 ||
                        index === current + 6 ||
                        index === current + 7 ||
                        index === current + 8) && (<img key={index} src={image} alt='random image'
                      className='-z-5 rounded-md h-32 w-32 col-span-1'/>)}
                  </>
                )
              })}
            </div>
            </div>
        </section>
      </div>
  )
};

export default ThumbnailCarousel;
