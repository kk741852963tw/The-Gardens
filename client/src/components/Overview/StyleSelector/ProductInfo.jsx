import React from 'react';
import SocialWidget from './SocialWidget.jsx';

const ProductInfo = ( { productData } ) => {
  return (
    <div>
      <div>
        <p className='text-xl text-gray-500 pt-10'>{productData.category}</p>
        <h2 className='text-3xl text-gray-700 font-bold font-poppins'>{productData.name}</h2>
        <p className='text-xl text-gray-500'>{productData.default_price}</p>
      </div>
    <div>
      <SocialWidget />
    </div>
    </div>
  )
};

export default ProductInfo;