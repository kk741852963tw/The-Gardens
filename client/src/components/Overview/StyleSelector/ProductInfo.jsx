import React from 'react';

const ProductInfo = ( { productData } ) => {
  return (
    <div>
      <p className='text-xl'>{productData.category}</p>
      <h2 className='text-3xl font-bold font-poppins'>{productData.name}</h2>
      <p className='text-xl'>{productData.default_price}</p>
    </div>
  )
};

export default ProductInfo;