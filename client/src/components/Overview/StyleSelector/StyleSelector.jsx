import React from 'react';

const StyleSelector = (props) => {
  console.log(props);

 ` // const styleArray = props.slides.map(slide => {
  //   console.log(slide.photos);
  // });

  // console.log(styleArray);`

  return (
    <div className='grid grid-cols-4'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  )
};

export default StyleSelector;