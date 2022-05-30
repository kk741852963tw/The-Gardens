import React from 'react';

const ProductBlurb = ( { productData } ) => {
  //Data Check
  if (!productData.features) {
    return null;
  }

  let features = productData.features;

  return (
    <div className="position-relative flex inline-flex">

      <div>
        <h2>{productData.slogan}</h2>
        <p>{productData.description}</p>
      </div>

      <div className>
       {features.map((feat, index) => {
         return (
           <div key={index}>
              <p>{feat.feature}</p>
              <p>{feat.value}</p>
          </div>
         )
       })}
      </div>

    </div>
  )
};

export default ProductBlurb;