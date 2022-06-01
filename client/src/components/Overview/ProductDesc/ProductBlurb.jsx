import React from 'react';

const ProductBlurb = ( { productData } ) => {
  //Data Check
  if (!productData.features) {
    return null;
  }

  let features = productData.features;

  return (
    <div className="position-relative flex items-center pt-10">

      <div>
        <h2 className='text-5xl font-bold py-4'>{productData.slogan}</h2>
        <p className='text-xl position-relative w-1/2 p-0 m-0'>{productData.description}</p>
      </div>

      <div>
       {features.map((feat, index) => {
         return (
           <div key={index}>
              <p className='font-bold'>{feat.feature}: {feat.value}</p>
          </div>
         )
       })}
      </div>

    </div>
  )
};

export default ProductBlurb;