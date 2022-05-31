import React, { useState } from 'react';

const SizeQuantSelector = ( { skus } ) => {
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
  if (!options || !ids) {
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

  const [currentQuant, setCurrentQuant] = useState(buttonData[0].quantity);
  const [selectedSize, setSelectedSize] = useState(buttonData[0].size);


  return (
    <div>
      <label htmlFor='selectSize'>Select Size</label>
      <select id='selectSize' onChange={(e) => {
        const quant = e.target.value;
        setCurrentQuant(quant);
      }}>

      {buttonData.map((option) =>
        <option value={option.quantity}
                id={option.id}
                key={option.id}>{option.size}</option>
      )}
      </select>

      < div>
            {(() => {
              if (currentQuant < 15) {
                const range = [ ...Array(currentQuant).keys() ].map( i => i+1);
                console.log(range);
                return (
                  <div>
                  <label htmlFor='quantity'>Select Quantity</label>
                  <select name='quantity' value='' disable selected>
                      {range.map((value) => {
                        <option value={value} key={value}>{value}</option>
                      })}
                  </select>
                  </div>
                )
              } else {
                const range = [ ...Array(15).keys() ].map( i => i+1);
                return (
                  <div>
                  <label htmlFor='quantity'>Select Quantity</label>
                  <select name='quantity'>
                      {range.map((value) => {
                        <option value={value} key={value}>{value}</option>
                      })}
                  </select>
                  </div>
                )
              }
            })()}
      </div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
};

export default SizeQuantSelector;