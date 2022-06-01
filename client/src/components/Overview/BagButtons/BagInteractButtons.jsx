import React from 'react';

import SizeQuantSelector from './SizeSelector.jsx';

const BagInteractButtons = ( { activeStyle, sizeListener, quantityListener, addToCart, cartSize } ) => {
  let skus = activeStyle.map((item) => {
    return item.skus;
  });


  return (
    <>

      <SizeQuantSelector skus={skus}
                         sizeListener={sizeListener}
                         quantityListener={quantityListener}
                         addToCart={addToCart}
                         cartSize={cartSize}/>
    </>
  )
};

export default BagInteractButtons;