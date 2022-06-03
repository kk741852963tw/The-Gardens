import React, { useState } from 'react';

const SizeQuantSelector = ( { skus, sizeListener, quantityListener, addToCart, cartSize } ) => {
  //Separate Data
  let ids = skus.map(items => {
    return Object.keys(items);
  });
  ids = ids[0];

  let options = skus.map(items => {
    return Object.values(items);
  })
  options = options[0];

  //Check for Data
  if (!options || !ids || !sizeListener || !quantityListener || !addToCart) {
    return null;
  }

  //Combine
  const buttonData = [];
  for (let i = 0; i < ids.length; i++) {
    let innerObj = {
      'id': ids[i],
      'size': options[i].size,
      'quantity': options[i].quantity,
    }
    buttonData.push(innerObj);
  }
  //Used to link buttons
  const [listedQuant, setListQuant] = useState(buttonData[0].quantity);


  return (
    <div>
      <div className='grid grid-cols-3 gap-2'>
        <div className='col-span-2'>
          <select
            className='border-2 border-gray-300 bg-gray-500 hover:bg-gray-700 hover:text-white text-white font-bold py-2 px-4 rounded w-full'
            onChange={(e) => {
            let data = e.target.value.split(',');
            let quant = data[0];
            let size = data[1];
            sizeListener(size)
            setListQuant(quant);
            }}>

          <option value="none" selected disabled hidden>Choose Size</option>
          {buttonData.map((option, index) =>
            <option value={[option.quantity, option.id]}
                    id={option.id}
                    key={index}

                    >{option.size}</option>
          )}
          </select>
          </div>


              {(() => {
                if (cartSize === '') {
                  return (
                    <div className='col-span-1'>
                      <select name='quantity' id='sizeSelector' onChange={(e)=>{quantityListener(e)}}
                      className='border-2 border-gray-300 bg-gray-500 hover:bg-gray-700 hover:text-white text-white font-bold py-2 px-4 rounded w-full flex'>
                      <option value="none" selected disabled hidden>-</option>
                      </select>
                    </div>
                  )
                } else if (listedQuant < 15) {
                  let range = [ ...Array(Number(listedQuant)).keys() ].map( i => i+1);
                  return (
                    <div>
                    <select name='quantity' onChange={(e)=>{quantityListener(e)}}
                    className='border-2 border-gray-300 bg-gray-500 hover:bg-gray-700 hover:text-white text-white font-bold py-2 px-4 rounded w-full flex'>
                        {range.map((value) =>
                          <option value={value}
                                  key={value}>{value}</option>
                        )}
                    </select>
                    </div>
                  )
                } else {
                  let range = [ ...Array(15).keys() ].map( i => i+1);
                  return (
                    <div>
                    <select name='quantity' onChange={(e)=>{quantityListener(e)}}
                    className='border-2 border-gray-300 bg-gray-500 hover:bg-gray-700 hover:text-white text-white font-bold py-2 px-4 rounded w-full'>
                        {range.map((value) =>
                          <option value={value}
                                  key={value}>{value}</option>
                        )}
                    </select>
                    </div>
                  )
                }
              })()}

      </div>

      <div>
        {(() => {
          if (listedQuant === 0) {
            return null;
          } else {
            return (
              <button onClick={()=>{addToCart()}}
              className='mt-2 border-2 border-gray-300 bg-gray-500 hover:bg-gray-700 hover:text-white text-white font-bold py-2 px-4 rounded col-span-3 w-full'>Add to Cart</button>
            )
          }
        })()}
      </div>
    </div>
  )
};

export default SizeQuantSelector;