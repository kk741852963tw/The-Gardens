import React from 'react';
import ImageCarouselData from './ImageCarousel/ImageCarouselData.jsx';
import ImageCarousel from '../Overview/ImageCarousel/ImageCarousel.jsx';
import Headline from './Header/Headline.jsx';
import BagInteractButtons from './BagButtons/BagInteractButtons.jsx';
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
            <ImageCarousel slides={ImageCarouselData} />
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
