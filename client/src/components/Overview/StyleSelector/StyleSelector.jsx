import React from 'react';


const StyleSelector = ( { activeStyle, thumbnailArray, updateActive} ) => {
  //Data Check
  if (!thumbnailArray || !activeStyle[0] || !updateActive) {
    return null;
  }

  return (
    <div>
      <h2>Style {">"} {activeStyle[0].name}</h2>
      <div className='grid grid-cols-4 h-[100px] w-[100px] max-h-[100px]'>
          {thumbnailArray.map((photo) => {
            return (
            <img key={photo.image}
              name={photo.style_id}
              src={photo.image}
              onClick={(e)=>updateActive(e)}
              className='shadow rounded-full align-middle border-none h-[100px] w-[100px]'
              />)
          })}
      </div>
    </div>
  )

};

export default StyleSelector;