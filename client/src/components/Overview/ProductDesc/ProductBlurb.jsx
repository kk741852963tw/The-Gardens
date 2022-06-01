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
        <h2 className='text-slate-400 text-6xl font-bold py-6 font-poppins'>{productData.slogan}</h2>
        <p className='text-xl position-relative m-0'>{productData.description}</p>
      </div>
        <div className='border-l-4 border-gray-700 h-48 mr-8'></div>
      <div>
       {features.map((feat, index) => {
         return (
           <div key={index} >
              <p className='font-bold'>{feat.feature}: {feat.value}</p>
          </div>
         )
       })}
      </div>

    </div>
  )
};

export default ProductBlurb;