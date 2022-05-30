import React from 'react';

const ProductInfo = ( { productData } ) => {
  return (
    <div>
      <p>{productData.category}</p>
      <h2>{productData.name}</h2>
      <p>{productData.default_price}</p>
    </div>
  )
};

export default ProductInfo;