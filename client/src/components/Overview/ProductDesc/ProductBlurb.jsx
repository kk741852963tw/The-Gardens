import React from 'react';

const ProductBlurb = ( { productData } ) => {
  //Data Check
  if (!productData.features) {
    return null;
  }

  let features = productData.features;

  return (
    <div className="position-relative flex items-center pt-4">

      <div className='ml-32'>
        <h2 className='text-gray-700 text-6xl font-bold py-6 font-poppins'>{productData.slogan}</h2>
        <p className='text-gray-700 text-xl position-relative m-0'>{productData.description}</p>
      </div>
        <div className='border-l-4 border-gray-400 h-48 mr-6'></div>
      <div>
       {features.map((feat, index) => {
         return (
          <>
            <div key={index} className='justify-center'>
                <p className='font-bold text-gray-700 float-left'>&#10003; {feat.feature}: </p>
            </div>
            <div>
              <p className='font-bold text-gray-700 float-right'>{feat.value}</p>
            </div>
          </>
         )
       })}
      </div>

    </div>
  )
};

export default ProductBlurb;