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
      <label htmlFor='selectSize'>Select Size</label>
      <select onChange={(e) => {
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
                    <select name='quantity' id='sizeSelector' onChange={(e)=>{quantityListener(e)}}>
                    <option value="none" selected disabled hidden>-</option>
                    </select>
                  </div>
                )
              } else if (listedQuant < 15) {
                let range = [ ...Array(Number(listedQuant)).keys() ].map( i => i+1);
                return (
                  <div>
                  <label htmlFor='quantity' >Select Quantity</label>
                  <select name='quantity' onChange={(e)=>{quantityListener(e)}}>
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
              <button onClick={()=>{addToCart()}}>Add to Cart</button>
            )
          }
        })()}
      </div>
    </div>
  )
};

export default SizeQuantSelector;