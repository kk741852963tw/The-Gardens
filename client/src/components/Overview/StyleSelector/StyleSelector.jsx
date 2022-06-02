import React from 'react';


const StyleSelector = ( { activeStyle, thumbnailArray, updateActive} ) => {
  //Data Check
  if (!thumbnailArray || !activeStyle[0] || !updateActive) {
    return null;
  }
  console.log(activeStyle);
  return (
    <div>
      <h2>Style {">"} {activeStyle[0].name}</h2>
      <div className='grid grid-cols-4'>
          {thumbnailArray.map((photo) => {
            return (
            <div key={photo.style_id}>
              <img
                name={photo.style_id}
                src={photo.image}
                onClick={(e)=>updateActive(e)}
                className='border-4 border-gray-400 rounded-full w-20 h-20 cursor-pointer p-1'
                />
              </div>
              )
          })}
      </div>
    </div>
  )

};

export default StyleSelector;
