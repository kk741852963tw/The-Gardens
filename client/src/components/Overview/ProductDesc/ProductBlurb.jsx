import React from 'react';

const ProductBlurb = ( { productData } ) => {
  //Data Check
  if (!productData.features) {
    return null;
  }

  let features = productData.features;

  return (
    <div className="position-relative flex items-center pl-8 pt-4">

      <div className='ml-11'>
        <h2 className='text-gray-700 text-6xl font-bold py-6 font-poppins'>{productData.slogan}</h2>
        <p className='text-gray-700 text-xl position-relative m-0'>{productData.description}</p>
      </div>
        <div className='border-l-4 border-gray-400 h-56 mx-4'></div>
      <div>
       {features.map((feat, index) => {
         return (

            <div key={index} className='justify-center'>
                <p className='font-bold text-gray-700 w-80'>&#10003; {feat.feature}: {feat.value}</p>
            </div>

         )
       })}
      </div>

    </div>
  )
};

export default ProductBlurb;