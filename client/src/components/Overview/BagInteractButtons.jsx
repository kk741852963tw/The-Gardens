import React from 'react';
import AddToCartButton from './AddToCartButton.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const BagInteractButtons = (props) => {
  //Log here
  return (
    <div className='grid grid-cols-2 sm:w-40 float-right'>
      <AddToCartButton />
      <SizeSelector />
      <QuantitySelector />
    </div>
  )
};

export default BagInteractButtons;