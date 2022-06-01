import React from 'react';

import SizeQuantSelector from './SizeSelector.jsx';

const BagInteractButtons = ( { activeStyle, sizeListener, quantityListener, addToCart, cartSize } ) => {
  let skus = activeStyle.map((item) => {
    return item.skus;
  });


  return (
    <div className='grid grid-cols-2 sm:w-40 float-right bg-gray-700 max-h-full float-right'>

      <SizeQuantSelector skus={skus}
                         sizeListener={sizeListener}
                         quantityListener={quantityListener}
                         addToCart={addToCart}
                         cartSize={cartSize}/>
    </div>
  )
};

export default BagInteractButtons;