import React from 'react';

const ProductInfo = ( { productData } ) => {
  return (
    <div>
      <p className='text-xl text-gray-500'>{productData.category}</p>
      <h2 className='text-3xl text-gray-700 font-bold font-poppins'>{productData.name}</h2>
      <p className='text-xl text-gray-500'>{productData.default_price}</p>
    </div>
  )
};

export default ProductInfo;