import React from 'react';

const QuantitySelector = (props) => {
  return (
    <div>
      <label htmlFor='quantity'>Select Quantity</label>
      <input type='number' id='quantity'></input>
    </div>
  )
};

export default QuantitySelector;