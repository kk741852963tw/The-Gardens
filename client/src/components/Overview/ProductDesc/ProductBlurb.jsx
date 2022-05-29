import React from 'react';

const ProductBlurb = ( { productData } ) => {
  //Pull out features and stack to the right of slogan
  return (
    <div className="position-relative">

      <div>
        <h2>{productData.slogan}</h2>
        <p>{productData.description}</p>
      </div>

      <div>

      </div>

    </div>
  )
};

export default ProductBlurb;