import React, { useState } from 'react';

const SizeQuantSelector = ( { skus, sizeListener, quantityListener } ) => {
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
  if (!options || !ids || !sizeListener || !quantityListener) {
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
  //Used to send data to
  const [selectedSize, setSelectedSize] = useState(buttonData[0].size);

  //console.log(selectedSize, listedQuant);

  return (
    <div>
      <label htmlFor='selectSize'>Select Size</label>
      <select id='selectSize' onChange={(e) => {
        const quant = e.target.value;
        setListQuant(quant);
        }}>

      <option value="none" selected disabled hidden>Choose Size</option>
      {buttonData.map((option, index) =>
        <option value={option.quantity}
                name={option.id}
                key={index}
                >{option.size}</option>
      )}
      </select>

      < div>
            {(() => {
              if (listedQuant < 15) {
                let range = [ ...Array(Number(listedQuant)).keys() ].map( i => i+1);
                return (
                  <div>
                  <label htmlFor='quantity' >Select Quantity</label>
                  <select name='quantity' onChange={(e)=>{quantityListener(e)}}>

                      <option value="none" selected disabled hidden>-</option>
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
                  <select name='quantity' onChange={(e)=>{quantityListener(e)}}>
                      <option value="none" selected disabled hidden>-</option>
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
        <button>Add to Cart</button>
      </div>
    </div>
  )
};

export default SizeQuantSelector;