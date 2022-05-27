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

  return (
    <div>
      <label htmlFor='selectSize'>Select Size</label>
      <select id='selectSize' onChange={(e) => {
        const quant = e.target.value;
        setCurrentQuant(quant);
      }}>

      {buttonData.map((option) =>
        <option value={option.quantity} id={option.id} key={option.id}>{option.size}</option>
      )}
      </select>

      < div>
        <label htmlFor='quantity'>Select Quantity</label>
        <div>
          <input type="number" min='0' key={currentQuant} max={currentQuant} placeholder='0'></input>
        </div>
      </div>

    </div>
  )
};

export default SizeQuantSelector;