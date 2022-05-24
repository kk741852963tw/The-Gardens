import React from 'react';
import Carousel from '../Overview/Carousel/Carousel.jsx';
import Headline from './Headline.jsx';
import BagInteractButtons from './BagInteractButtons.jsx';
const axios = require('axios');


class Products extends React.Component {

  //Render
  render() {
    //All other sub-components should end up here
    return (

      <div className='p-10'>
        <div>
          <Headline />
        </div>

        <div>
          <div>
            <Carousel />
          </div>
          <div>
            <BagInteractButtons/>
          </div>
        </div>
      </div>
    )
  }
};

//export to main app
export default Products;
