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
      <div className='flex p-4'>
        <label htmlFor='selectSize'>Select Size</label>
        <select
          className='float-left bg-transparent hover:bg-gray-700 hover:text-white text-gray font-bold py-2 px-4 rounded'
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

        < div>
              {(() => {
                if (cartSize === '') {
                  return (
                    <div>
                      <label htmlFor='quantity' >Select Quantity</label>
                      <select name='quantity' id='sizeSelector' onChange={(e)=>{quantityListener(e)}}
                      className='float-right bg-transparent hover:bg-gray-700 hover:text-white text-gray font-bold py-2 px-4 rounded'>
                      <option value="none" selected disabled hidden>-</option>
                      </select>
                    </div>
                  )
                } else if (listedQuant < 15) {
                  let range = [ ...Array(Number(listedQuant)).keys() ].map( i => i+1);
                  return (
                    <div>
                    <label htmlFor='quantity' >Select Quantity</label>
                    <select name='quantity' onChange={(e)=>{quantityListener(e)}}
                    className='bg-transparent hover:bg-gray-700 hover:text-white text-gray font-bold py-2 px-4 rounded'>
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
                    <label htmlFor='quantity'>Select Quantity</label>
                    <select name='quantity' onChange={(e)=>{quantityListener(e)}}
                    className='bg-transparent hover:bg-gray-700 hover:text-white text-gray font-bold py-2 px-4 rounded'>
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
      </div>
      <div>
        {(() => {
          if (listedQuant === 0) {
            return null;
          } else {
            return (
              <button onClick={()=>{addToCart()}}
              className='bg-transparent hover:bg-gray-700 hover:text-white text-gray font-bold py-2 px-4 rounded w-12'>Add to Cart</button>
            )
          }
        })()}
      </div>
    </div>
  )
};

export default SizeQuantSelector;