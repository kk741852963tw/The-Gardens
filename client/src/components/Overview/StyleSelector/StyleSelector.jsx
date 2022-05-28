import React from 'react';


const StyleSelector = ( { activeStyle } ) => {
  //Data Check
  if (!activeStyle[0]) {
    return null;
  }
  const styleID = activeStyle[0].style_id;

  //Separate thumb and image urls
  const photoThumbUrl = activeStyle[0].photos.map(photo => {
    return photo.thumbnail_url;
  });


  return (
    <div className='grid grid-cols-4 gap-2'>
      {photoThumbUrl.map((photo, index) => {
        console.log(photo);
        return (<img key={photo} value={styleID} src={photo}
          className='rounded-full h-full' />)
      })}
    </div>
  )

};

export default StyleSelector;