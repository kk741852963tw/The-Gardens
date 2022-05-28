import React from 'react';


const StyleSelector = ( { activeStyle, thumbnailArray} ) => {
  //Data Check
  if (!thumbnailArray || !activeStyle[0]) {
    return null;
  }
  console.log(activeStyle[0].name);
  return (
    <div>
      <h2>Style {">"} {activeStyle[0].name}</h2>
      <div className='grid grid-cols-4 gap-2'>
        {thumbnailArray.map((photo, index) => {
          return (
          <img key={photo.style_id}
            value={photo.style_id}
            src={photo.image}
            className='rounded-full h-full'
            />)
        })}
      </div>
    </div>
  )

};

export default StyleSelector;