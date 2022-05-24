import React from 'react';

const SizeSelector = (props) => {
  return (
    <div>
      <select>
        <option value='xs'>XS</option>
        <option value='s'>S</option>
        <option value='m'>M</option>
        <option value='l'>L</option>
        <option value='xl'>XL</option>
      </select>
    </div>
  )
};

export default SizeSelector;